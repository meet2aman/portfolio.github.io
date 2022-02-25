$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        if($(window).scrollTop() < 25){
            $('.header').hide();
        }
        else{
            $('.header').show();
        }

        $('fa-bars').removeClass('.fa-times');
        $('.navbar').removeClass('.nav-toggle');
    })
});




var typed = new Typed('.typing-text', {
    // Waits 1000ms after typing "First"
    strings: ['Web Designer.', 'Front-End-developer.','Photographer.','Graphic Designer.'],
    typeSpeed:120,
    loop:true,
  });

  var typed = new Typed('.typing-text1', {
    // Waits 1000ms after typing "First"
    strings: ['Aman Kushwaha.','Aman Kushwaha.'],
    typeSpeed:120,
    loop:true,
  });



//   const mainmenu = document.querySelector('.mainmenu')

//   const closemenu = document.querySelector('.closemenu')

//   const openmenu = document.querySelector('.openmenu')


//   openmenu.addEventListener('click',show);
//   closemenu.addEventListener('click',close);

//   function show(){
//       mainmenu.style.display = 'flex';
//       mainmenu.style.top = '0';
//   }

//   function close(){
//       mainmenu.style.top = '-100%';
//   }





// $('.counter-1').countUp();



// $('.counter-1').counterUp();

$('.counter-1').counterUp({
    time: 2000,
    delay: 10
  });





$('.buttons').click(function(){
    var filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.filter-image').show();
    }else{
        $('.filter-image').not('.'+filter).hide();
        $('.filter-image').filter('.'+filter).show();
    }

    $(this).addClass('active').siblings().removeClass('active');
});



{/* <script>
  AOS.init();
</script> */}





var typed = new Typed('.typing-text2', {
    // Waits 1000ms after typing "First"
    strings: ['Aman Kushwaha &hearts;','Aman Kushwaha &hearts;'],
    typeSpeed:120,
    loop:true,
  });


 



var loader = document.getElementById("preloader");

window.addEventListener("load" , function(){
    loader.style.display = "none";
});
  

console.log("Hii This Is Me Aman.")