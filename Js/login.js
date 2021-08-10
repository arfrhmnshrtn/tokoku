const eye = document.querySelector('.eye i');
const passwordFeild = document.querySelector('.password-field input');

passwordFeild.onkeyup = () =>{
    if (passwordFeild.value == ''){
        eye.style.display = 'none';
    }else{
        eye.style.display = 'block';
    }
};

eye.addEventListener('click', function(){
    if (passwordFeild.type === 'password'){
        passwordFeild.setAttribute('type', 'text');
        eye.setAttribute('class', 'fas fa-eye-slash');
    }else{
        passwordFeild.setAttribute('type', 'password');
        eye.setAttribute('class', 'fas fa-eye');
    }
});