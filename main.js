searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}
    
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {

    searchForm.classList.remove('active');


    if(window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}


 $(document).ready(function(){
    $('.swiper-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite : true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        
    });
  }); 

  $(document).ready(function(){
    $('.swiper-wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        
    });
  });


  $(document).ready(function(){
    $('.swiper.wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        
    });
  });

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value > 1) ? 1 : value;
    value++;
    document.getElementById('number').value = value;
    console.log(value);
}

function decreaseValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    if (value < 1) {
        value == 1;
    }
    else {
        value--;
    }
    document.getElementById('number').value = value;
    console.log(value);
}

const eyeBtn1 = document.querySelector('#js-btn-eye');
const model1 = document.querySelector('.model1');
const model1Close = document.querySelector('.js-model1-close');
    eyeBtn1.addEventListener('click', function showEye(e) {
        model1.classList.add('open');
    });

    model1Close.addEventListener('click', function closeEye(e) {
        model1.classList.remove('open');
    });

const eyeBtn2 = document.querySelector('#js-btn-eye1');
const model2 = document.querySelector('.model2');
const model2Close = document.querySelector('.js-model2-close');
    eyeBtn2.addEventListener('click', function showEye(e) {
        model2.classList.add('open');
    });

    model2Close.addEventListener('click', function closeEye(e) {
        model2.classList.remove('open');
    });

const eyeBtn3 = document.querySelector('#js-btn-eye2');
const model3 = document.querySelector('.model3');
const model3Close = document.querySelector('.js-model3-close');
    eyeBtn3.addEventListener('click', function showEye(e) {
        model3.classList.add('open');
    });

    model3Close.addEventListener('click', function closeEye(e) {
        model3.classList.remove('open');
    });

const eyeBtn4 = document.querySelector('#js-btn-eye3');
const model4 = document.querySelector('.model4');
const model4Close = document.querySelector('.js-model4-close');
    eyeBtn4.addEventListener('click', function showEye(e) {
        model4.classList.add('open');
    });

    model4Close.addEventListener('click', function closeEye(e) {
        model4.classList.remove('open');
    });


const eyeBtn5 = document.querySelector('#js-btn-eye4');
const model5 = document.querySelector('.model5');
const model5Close = document.querySelector('.js-model5-close');
    eyeBtn5.addEventListener('click', function showEye(e) {
        model5.classList.add('open');
    });

    model5Close.addEventListener('click', function closeEye(e) {
        model5.classList.remove('open');
    });

const eyeBtn6 = document.querySelector('#js-btn-eye5');
const model6 = document.querySelector('.model6');
const model6Close = document.querySelector('.js-model6-close');
    eyeBtn6.addEventListener('click', function showEye(e) {
        model6.classList.add('open');
    });

    model6Close.addEventListener('click', function closeEye(e) {
        model6.classList.remove('open');
    });

const eyeBtn7 = document.querySelector('#js-btn-eye6');
const model7 = document.querySelector('.model7');
const model7Close = document.querySelector('.js-model7-close');
    eyeBtn7.addEventListener('click', function showEye(e) {
        model7.classList.add('open');
    });

    model7Close.addEventListener('click', function closeEye(e) {
        model7.classList.remove('open');
    });

const eyeBtn8 = document.querySelector('#js-btn-eye7');
const model8 = document.querySelector('.model8');
const model8Close = document.querySelector('.js-model8-close');
    eyeBtn8.addEventListener('click', function showEye(e) {
        model8.classList.add('open');
    });

    model8Close.addEventListener('click', function closeEye(e) {
        model8.classList.remove('open');
    });

const eyeBtn9 = document.querySelector('#js-btn-eye8');
const model9 = document.querySelector('.model9');
const model9Close = document.querySelector('.js-model9-close');
    eyeBtn9.addEventListener('click', function showEye(e) {
        model9.classList.add('open');
    });

    model9Close.addEventListener('click', function closeEye(e) {
        model9.classList.remove('open');
    });

const eyeBtn10 = document.querySelector('#js-btn-eye9');
const model10 = document.querySelector('.model10');
const model10Close = document.querySelector('.js-model10-close');
    eyeBtn10.addEventListener('click', function showEye(e) {
        model10.classList.add('open');
    });

    model10Close.addEventListener('click', function closeEye(e) {
        model10.classList.remove('open');
    });