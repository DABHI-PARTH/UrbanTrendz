
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let pswd = document.getElementById("pswd");
let cpswd = document.getElementById("cpswd");
let btn = document.getElementById("btn");


let registrationData = [];
let jsondata = localStorage.getItem('registrationData');
if (jsondata) {registrationData = JSON.parse(jsondata);}
btn.addEventListener('click', (e) => {
    e.preventDefault();
   {
        
        if (fname.value == '' || email.value == '' || pswd.value == '' || cpswd.value == '') {
            alert("Please fill all the fields.");
        }
        else {
            let repeated = registrationData.find(ele => ele.email == email.value)
            if (repeated) {
                alert("Email already exists.Kindly Login");
                location.href = '../Login/login.html';
            }
            else {
                if (pswd.value !== cpswd.value) {
                    alert("Password and Confirm Password does not match");
                }
                else {
                    registrationData.push({ fname: fname.value, email: email.value, pswd: pswd.value});
                    localStorage.setItem('registrationData', JSON.stringify(registrationData));
                    alert("Registration successful");
                    location.href = '../Login/login.html';
                }
            }
        }
    }

})

