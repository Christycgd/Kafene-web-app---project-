$(document).ready(function(){
    var form = document.getElementById('signIn');
    form.onsubmit = function(e){
        e.preventDefault();
    }
    var username = document.getElementById('signIn_UserName');
    var password = document.getElementById('signIn_Password');
    var loginBtn = document.getElementById('signIn_Btn');
    loginBtn.onclick = function(){
        if(username.value == password.value){
            alert('Login Successfully');
            localStorage.setItem('isLogedIn',true);
            const obj = {
                username : username.value,
                password : password.value
            }
            localStorage.setItem('userInfo',JSON.stringify(obj));
            location.assign('orders-page.html');
        }
        else{
            alert('Please enter valid credential!');
        }
    }
})
