$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
  $(".nav").toggleClass("nav-up");
  $(".form-signup-left").toggleClass("form-signup-down");
  $(".success").toggleClass("success-left");
  $(".btn-togo").toggleClass("btn-togo-up");
  $(".frame").toggleClass("frame-short");
	});
});

$(function() {
	$(".btn-signin").click(function() {
  $(".btn-animate").toggleClass("btn-animate-grow");
  $(".welcome").toggleClass("welcome-left");
  $(".cover-photo").toggleClass("cover-photo-down");
  $(".frame").toggleClass("frame-short");
  $(".profile-photo").toggleClass("profile-photo-down");
  $(".btn-goback").toggleClass("btn-goback-up");
  $(".forgot").toggleClass("forgot-fade");
	});
});




// const signInBtn = document.querySelector('.signin-active a');
// const signUpBtn = document.querySelector('.signup-inactive a');
// const signInForm = document.querySelector('.form-signin');
// const signUpForm = document.querySelector('.form-signup');

// signUpBtn.addEventListener('click', () => {
//   signInForm.classList.add('form-signin-left');
//   signUpForm.classList.add('form-signup-left');
// });

// signInBtn.addEventListener('click', () => {
//   signInForm.classList.remove('form-signin-left');
//   signUpForm.classList.remove('form-signup-left');
// });



