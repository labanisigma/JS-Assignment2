/**
 * Created by labaniacharjee on 20/10/20.
 */
//******************** Registration page coding ***************************

var arr = [];
function register(){

    var email = document.forms['myForm']['email'].value;
    var x = email.indexOf('@');
    var y = email.lastIndexOf('.');

    var firstName =document.getElementById('firstNameId').value;
    var lastName = document.getElementById('lastNameId').value;
    var userName = document.getElementById('userNameId').value;
    var emailAddress = document.getElementById('emailId').value;
    var email_confirm = document.getElementById('emailId_confirmation').value;
    var contact = document.getElementById('phoneNoId').value;
    var password = document.getElementById('passwordId').value;
    var password_confirm = document.getElementById('password_confirmation').value;
    var date = document.getElementById('dateId').value;
// **********************    form validation    *****************************
    if(firstName == ''){

        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Name';

        return;
    }
    else if(lastName == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Last Name';
        return;
    }
    else if(userName == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your User Name';
        return;
    }
    else if(x < 1 || y < x+2 || y+2 >= email.length){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Email like exapmle@gmail.com';
        return;
    }
    else if(email_confirm == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Confirm Your Email';
        return;
    }
    else if(email_confirm !== email){
        document.getElementById('formvalidation').innerHTML = 'Emails does not match Enter correct Email';
        return;
    }
    else if(contact == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Contact Number';
        return;
    }
    else if(contact.length!= 10 && (contact.indexOf('9')!=1 || contact.indexOf('8')!=1 || contact.indexOf('7')!=1)){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Correct Your Contact Number';
        return;
    }
    else if(date == null){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Date';
        return;
    }
    else if(password == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your Password';
        return;
    }
    else if(password_confirm == ''){
        document.getElementById('formvalidation').innerHTML = 'Please Enter Your confirmation password';
        return;
    }
    else if(password_confirm !== password){
        document.getElementById('formvalidation').innerHTML = 'Password does not match Enter correct password';
        return;
    }
    var objFiled = {
        userFirstName : firstName ,
        UserlastName : lastName ,
        userFullName : userName ,
        userEmailAddress : emailAddress ,
        userDate : date ,
        userContact : contact,
        userPassword : password
    };
    arr.push(objFiled);

//******************localStorage ********************************

    localStorage.setItem( "Registration" , JSON.stringify(arr));
    sweetAlert("Done...", "Registration completed" ,"success");


// *****************empty input field *******************************

    document.getElementById('firstNameId').value = '';
    document.getElementById('lastNameId').value = '';
    document.getElementById('userNameId').value = '';
    document.getElementById('emailId').value = '';
    document.getElementById('emailId_confirmation').value = '';
    document.getElementById('phoneNoId').value = '';
    document.getElementById('passwordId').value = '';
    document.getElementById('password_confirmation').value = '';

}
function cleartxt(){
    document.getElementById('formvalidation').innerHTML = '';
}





//=====================sign In page coding ===============================


function siginpage() {
    var registrationData = localStorage.getItem("Registration");
    var getRegistration =  JSON.parse(registrationData);

    for(var i=0; i<getRegistration.length;i++){

        var login_Email = document.getElementById('login-username').value;
        var login_pass = document.getElementById('login-password').value;
        // var login_user = document.getElementById('login-username').value;

        if((getRegistration[i].userFullName != login_Email && getRegistration[i].userEmailAddress != login_Email ) || getRegistration[i].userPassword != login_pass ){
            sweetAlert("Oops...", "Something went wrong!", "error");
            return;
        }
        else{
            window.location.href = ('index.html');
        }

    }

}
function  reviewdetails() {
    // document.getElementById("details").innerHTML = "HI";
    // var register = localStorage.getItem( "Registration");
    // var getregister = JSON.parse(register);

    document.getElementById("details").innerHTML = "First Name: " + document.getElementById('firstNameId').value + "<br><br>"
        + "Last Name: " +  document.getElementById('lastNameId').value + "<br><br>"
        + "Contact Number: " +  document.getElementById('phoneNoId').value + "<br><br>"
        + "Email-Id: " +  document.getElementById('emailId').value + "<br><br>"
        + "Date Of Birth: " + document.getElementById('dateId').value + "<br><br>"
        + "User Name: " +  document.getElementById('userNameId').value;

}
function mouseoverPass() {
    document.getElementById('passwordId').type = "text";
}
function mouseoutPass(obj) {
    var obj = document.getElementById('passwordId');
    obj.type = "password";
}
function mouseoverPass1() {
    document.getElementById('password_confirmation').type = "text";
}
function mouseoutPass1(obj) {
    var obj = document.getElementById('password_confirmation');
    obj.type = "password";
}

//=====================confirm mail ===============================

function validateMail(p1,p2) {

    if (p1.value != p2.value || p1.value == '' || p2.value == '') {
        p2.setCustomValidity('email incorrect');
    } else {
        p2.setCustomValidity("");

//=====================show password ===============================

        function myFunction() {
            var x = document.getElementById("myInput");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
    }
}