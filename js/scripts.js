

$( document ).ready(function() {
    console.log( "ready!" );

$.getJSON({
      // 1) on définit le fichier vers lequel on envoye la requête POST , 
  url : 'https://sheets.googleapis.com/v4/spreadsheets/1fnFiXQ_t-5JQQ4yezHCiQucu43b9PxHTnybs_hirbRs/values/Sheet1?key=AIzaSyAJiGonV9z_YJkpJPb9So3iJIyzXS8KAbU',

 

  // 2/ on spécifie la méthode  
  type : 'GET', // Le type de la requête HTTP, ici  GET

  // 4) format de retour du fichier php dans "data"
  dataType : 'json',
  
  // 5) fonction à effectuer en cas de succès
  success : function(data){ //  contient le HTML renvoyé
       

    var html = "";
    

    console.log(data.values);

    for (i=1; i<data.values.length;i++) {

      nom = data.values[i][0].toUpperCase();
      prenom = data.values[i][1];
      gender = data.values[i][2];
      imageurl = data.values[i][3];

      html += '<div class="'+gender+'">';
      html += '<img src="img/'+imageurl+'">';
      html += '<h2>'+nom+'</h2>';
      html += '<p>'+prenom+'</p>';
      html += '</div>';

    }// for

    $('.container').html(html);


    const timeline = gsap.timeline({
      defaults: {
          ease: 'none',
          duration: 1,
      },
  });
  
  timeline
      .fromTo('h1', {
          opacity: 0,
          y: -50,

      },
      {
          
          opacity: 1, 
          y: 0,
          ease: 'power1.out',
          stagger: 0.2,
      })
      
    timeline
      .to('.container > div', {
        duration: .75,
         x: 20,
        // width: 0,
        opacity: 1,
        stagger: 0.2
      })
   
  
        } // success
    }); // intro ajax function
 

});//reday



