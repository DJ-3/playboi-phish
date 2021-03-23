loginForm.addEventListener('input', () => {  if(username.value.length >0 && password.value.length >5)  {  loginbtn.removeAttribute('disabled');  }
else { loginbtn.setAttribute('disabled' , ''); }
} 
);

username.addEventListener('input' , () => {if(username.value.length >0) {username.parentElement.classList.add('FATdn');}  else{username.parentElement.classList.remove('FATdn');} });
password.addEventListener('input' , () => {if(password.value.length >0) {password.parentElement.classList.add('FATdn');}  else{password.parentElement.classList.remove('FATdn');} });



