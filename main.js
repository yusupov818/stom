$(document).ready(function () {
  
  
         /*-----------------
          HAMBURGER MENU
      -----------------*/
      $("#hamburger_btn").on("click", function (e) {
        e.preventDefault();
        $(".hamburger_menu, .overlay").addClass("active");
        $('body').addClass('disable');
      });
      $(".hamburger_close, .overlay").on("click", function () {
        $(".hamburger_menu, .overlay").removeClass("active");
        $('body').removeClass('disable');
      });
      /*-----------------
          HAMBURGER MENU
      -----------------*/

  });
  