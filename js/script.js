$(function (){
  var contactresponse = $('.contactresponse');


  function contactsuccess() {
    contactresponse.empty().html('<div class="w3-container w3-white"><h3 class="w3-text-green">Obrigado!</h3><p class="w3-text-teal">Mensagem enviada com sucesso.</p></div> ').slideDown('fast').delay(3000).slideUp('fast');;
  };

  function contacterror(){
    contactresponse.empty().html('<div class="w3-container w3-white"><h3 class="w3-text-red">Tenta novamente!</h3><p class="w3-text-teal">Ocorreu um erro durante o envio da mensagem.</p></div>').slideDown('fast').delay(3000).slideUp('fast');;
  };

  //ajax set Setup [defualt config when submit form for ajx]
  $.ajaxSetup({
    url: "model/default.php",
    type: "POST"
  });


// Abrir o menu para mobile

function w3_open() {

    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("mySidenav").style.display = "block";

}

function w3_close() {
      document.getElementById("main").style.marginLeft = "0%";
      document.getElementById("mySidenav").style.display = "none";
    
  }



    //Scroll click single page
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    //Hide em Show w3 element, when have this propriety
    function myFunction() {
        var x = document.getElementById("demo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }


    //form contact submit for ajax send

    $(document).on('submit', '#form-contact', function(){
      var sender = $(this).serialize();

      $.ajax({
        data: sender,
        beforeSend: function(){
          $('.submitarea').empty().html('  <img src="img/loading.gif" alt="" width="3%" />');
        },
        error: '',
        success: function (retorno){
          $('.submitarea').empty().html('<input class="w3-btn w3-blue-grey" type="submit" name="submit" value="send">');
          if (retorno == 1) {
            contactsuccess();
            $('#form-contact').trigger('reset');
          }else {
            contacterror()
          }
        }
      })
      //alert(data);
      return false;
    })
})
