const hamburgerIcon = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');
const navButtons = document.querySelector('.nav-btns');
const imgs = document.querySelectorAll('.cards .card');
const userInfo = document.querySelector('#user-info');

hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation();
    menuItems.classList.toggle('active');
})


const slider = document.querySelector('.slider');
const arrowButtons = document.querySelectorAll('[data-index-change]');
let currIndex = 0;
function slide(nextIndex) {
  if (nextIndex < 0 || nextIndex >= imgs.length){
    return;
  }
  slider.style.transform = `translateX(-${(nextIndex / imgs.length) * 100}%)`;
  currIndex = nextIndex;
}
arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const indexChange = +button.getAttribute('data-index-change');
    slide(currIndex + indexChange);
  });
});



export const removeEmailErrors = (emailErrorSpan)=>{
  emailErrorSpan.style.opacity = 0;
  emailErrorSpan.textContent='';
}
export const removePasswordErrors = (passwordErrorSpan)=>{
  passwordErrorSpan.style.opacity=0;
  passwordErrorSpan.textContent='';
}

export const handleLoginSignUp = ({email,password,emailErrorSpan,passwordErrorSpan,popup})=>{
  const emailError = validateEmail(email.value);
const passwordError = validatePassword(password.value);
if(emailError)
{
  emailErrorSpan.textContent = emailError;
  emailErrorSpan.style.opacity = 1;
  email.focus();
}
if(passwordError)
{
  passwordErrorSpan.textContent = passwordError;
  passwordErrorSpan.style.opacity = 1;
  if(!emailError)
  {
    password.focus();
  }
}
if(emailError || passwordError)
  {
    return;
  }
  localStorage.setItem('USER',email.value);
  popup.classList.remove('modal-active');
  navButtons.style.display='none';
  userInfo.style.display='flex';;
}

function validateEmail(emailInput) {
  let errorMessage;

  if (!emailInput) {
      errorMessage = "Email is required.";
  } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput)) {
          errorMessage ="Invalid email format.";
      }
      else if (emailInput.length < 5) {
          errorMessage = "Email is too short.";
      }
      else if (!emailInput.includes('@')) {
          errorMessage = "Email must contain '@'.";
      }
      else if (!emailInput.includes('.')) {
          errorMessage = "Email must contain a domain.";
      }
  }
  return errorMessage;
}
function validatePassword(passwordInput) {
  let errorMessage;

  if (!passwordInput) {
    errorMessage="Password is required.";
  } else {
      if (passwordInput.length < 8) {
        errorMessage = "Password must be at least 8 characters long.";
      }
      else if (!/[A-Z]/.test(passwordInput)) {
        errorMessage = "Password must contain at least one uppercase letter.";
      }
      else if (!/[a-z]/.test(passwordInput)) {
        errorMessage = "Password must contain at least one lowercase letter.";
      }
      else if (!/[0-9]/.test(passwordInput)) {
        errorMessage = "Password must contain at least one number.";
      }
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) {
        errorMessage = "Password must contain at least one special character.";
      }
  }
  return errorMessage;
}



const emailErrorSpan = document.querySelector('#email-error');
const passwordErrorSpan = document.querySelector('#password-error');
const loginPopup = document.querySelector('#login-popup');
const loginButton = document.querySelector('#login');
const loginCloseBtn = document.querySelector('#login-popup .close-button');
const loginNavBtn = document.querySelector('#login-nav');

document.querySelector('#email').addEventListener('keydown',(event)=>{
    event.stopPropagation();
    removeEmailErrors(emailErrorSpan);
  })
  document.querySelector('#password').addEventListener('keydown',(event)=>{
    event.stopPropagation();
    removePasswordErrors(passwordErrorSpan);
  })

  loginButton.addEventListener('click',(event)=>{
    event.stopPropagation();
    event.preventDefault();
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');  
    handleLoginSignUp({email,password,emailErrorSpan,passwordErrorSpan,popup:loginPopup});
  })


  loginNavBtn.addEventListener('click',e=>{
    e.stopPropagation();
    loginPopup.classList.add('modal-active');
  })
  loginCloseBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    loginPopup.classList.remove('modal-active');
  })



const emailErrorSignUpSpan = document.querySelector('#email-error-signUp');
const passwordErrorSignUpSpan = document.querySelector('#password-error-signup');
const signupPopup = document.querySelector('#signUp-popup');
const signUpButton = document.querySelector('#signup');
const signupCloseBtn = document.querySelector('#signUp-popup .close-button');
const signUpNavBtn = document.querySelector('#signup-nav');

document.querySelector('#signup-email').addEventListener('keydown',(event)=>{
    event.stopPropagation();
    removeEmailErrors(emailErrorSignUpSpan);
  })
  document.querySelector('#signup-password').addEventListener('keydown',(event)=>{
    event.stopPropagation();
    removePasswordErrors(passwordErrorSignUpSpan);
  })

  signUpButton.addEventListener('click',(event)=>{
    event.stopPropagation();
    event.preventDefault();
    const email = document.querySelector('#signup-email');
    const password = document.querySelector('#signup-password');  
    handleLoginSignUp({email,password,emailErrorSpan:emailErrorSignUpSpan,passwordErrorSpan:passwordErrorSignUpSpan,popup:signupPopup});
  })

  signUpNavBtn.addEventListener('click',e=>{
    e.stopPropagation();
    signupPopup.classList.add('modal-active');
  })
  signupCloseBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    signupPopup.classList.remove('modal-active');
  })