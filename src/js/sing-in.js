// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openSing_inBtn: document.querySelector('[data-sing_in-open]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeSing_inBtn: document.querySelector('[data-sing_in-close]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     sing_in: document.querySelector('[data-sing_in]'),
//   };

//   refs.openSing_inBtn.addEventListener('click', toggleSing_in);
//   refs.closeSing_inBtn.addEventListener('click', toggleSing_in);

//   function toggleSing_in() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.sing_in.classList.toggle('is-open');
//     }
    
  
// })();


// ====робоча версія відкриття модалки====




// (() => {
//   const refs = {
//     openSing_inBtn: document.querySelector('[data-sing_in-open]'),
//     openSing_upBtn: document.querySelector('[data-sing_up-open]'),
//     closeSing_inBtn: document.querySelector('[data-sing_in-close]'),
//     sing_in: document.querySelector('[data-sing]'),
//   };

//   refs.openSing_inBtn.addEventListener('click', toggleSing_in);
//   refs.openSing_upBtn.addEventListener('click', toggleSing_in);
//   refs.closeSing_inBtn.addEventListener('click', toggleSing_in);

//   refs.sing_in.addEventListener('click', onBackdropClick);

//   function toggleSing_in() {
//     refs.sing_in.classList.toggle('is-open');
//   }

//   function onBackdropClick(event) {
//     if (event.target === refs.sing_in) {
//       toggleSing_in();
//     }
//   }
// })();

// ====робоча версія відкриття модалки====




// ===відкриття модалки на різні вкладки===





(() => {
  const refs = {
    openSing_inBtns: document.querySelectorAll('[data-sing_in-open]'),
    openSing_upBtns: document.querySelectorAll('[data-sing_up-open]'),
    closeSing_inBtn: document.querySelector('[data-sing_in-close]'),
    sing_in: document.querySelector('[data-sing]'),
    frame: document.querySelector('.frame'),
    formSignIn: document.querySelector('.form-signin'),
    formSignUp: document.querySelector('.form-signup'),
    signinTab: document.querySelector('.signin-active'),
    signupTab: document.querySelector('.signup-inactive'),
    forgot: document.querySelector('.forgot'),
  };

  // для ВСІХ кнопок входу
  refs.openSing_inBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      resetToDefault(); // гарантує початковий стан "Sign In"
      toggleSing_in();
    });
  });

  // для ВСІХ кнопок реєстрації
  refs.openSing_upBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleSing_in();
      openSignUpView(); // одразу показуємо "Sign Up"
    });
  });

  refs.closeSing_inBtn.addEventListener('click', () => {
    toggleSing_in();
    resetToDefault(); // скидуємо стан після закриття
  });

  refs.sing_in.addEventListener('click', onBackdropClick);

  function toggleSing_in() {
    refs.sing_in.classList.toggle('is-open');
  }

  function onBackdropClick(event) {
    if (event.target === refs.sing_in) {
      toggleSing_in();
      resetToDefault();
    }
  }

  function resetToDefault() {
    // повертаємо форму в стан "Sign In"
    refs.frame.classList.remove('frame-long');
    refs.formSignIn.classList.remove('form-signin-left');
    refs.formSignUp.classList.remove('form-signup-left');
    refs.signupTab.classList.remove('signup-active');
    refs.signupTab.classList.add('signup-inactive');
    refs.signinTab.classList.remove('signin-inactive');
    refs.signinTab.classList.add('signin-active');
    refs.forgot.classList.remove('forgot-left');
  }

  function openSignUpView() {
    // додаємо класи вручну, щоб одразу відкрити слайд реєстрації
    refs.frame.classList.add('frame-long');
    refs.formSignIn.classList.add('form-signin-left');
    refs.formSignUp.classList.add('form-signup-left');
    refs.signupTab.classList.add('signup-active');
    refs.signupTab.classList.remove('signup-inactive');
    refs.signinTab.classList.add('signin-inactive');
    refs.signinTab.classList.remove('signin-active');
    refs.forgot.classList.add('forgot-left');
  }
})();

// ===відкриття модалки на різні вкладки===
