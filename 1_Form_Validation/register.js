function validationForm(){

      if(document.getElementById("uname").value==""){
          alert("Enter your name");
          document.myform.username.focus();
        }
        else if(validateUsername()){
          alert("Enter Username correctly");
          document.myform.username.focus();
        }
        else if(document.getElementById("pass").value==""){
          alert("Enter your password");   
          document.myform.password.focus();
        }
        else if(validatePassword()){
          alert("Enter Password correctly");
          document.myform.password.focus();
        }
        else if(document.getElementById("email").value==""){
          alert("Enter your Email ID");
          document.myform.emailID.focus();
        }
        else if(validateEmail()){
          alert("Please enter a valid Email id");
          document.myform.emailID.focus();
        }
        else if(document.getElementById("phno").value==""){
          alert("Enter your Phone Number");
          document.myform.phonenumber.focus();
        }
        else if(validatePhone()){
          alert("Please enter a valid Phone Number");
          document.myform.phonenumber.focus();
        }
        else{
          validateUser();
        } 
  }
      
function validateUser(){
    var arrusers = ["Suraj Marthy", "Rohan Mendonca", "Tarun Choudhary", "Vaishnavi Nayak"];
        usrname = document.getElementById("uname").value;
        flag = 0;
        for(var i = 0; i<arrusers.length; i++){

            if (!usrname.localeCompare(arrusers[i])){
            alert("Username already exist, please give another one");
            flag = 0;
            break;
            }
            else{
                flag = 1;
            }
        }
        if (flag == 1){
            arrusers.push(usrname);
            alert("Registration is successful");
            document.myform.submit();
        } 
  }

function validatePassword(){
    var str = document.getElementById("pass").value; 
    if (str.match(/[a-z]/g) && str.match( 
                  /[A-Z]/g) && str.match( 
                  /[0-9]/g) && str.match( 
                  /[^a-zA-Z\d]/g) && str.length >= 8) 
        return false;
    else 
        return true; 
}

function validateUsername(){
      
    var str = document.getElementById("uname").value; 
    if (str.length >= 5 && str.length <= 15) 
        return false;
    else 
        return true; 
}

function validatePhone(){
      
    var str = document.getElementById("phno").value; 
    if (str.match(/[0-9]/g) && str.length == 10) 
        return false;
  
    else 
        return true; 
}

function validateEmail(){
    var str = document.getElementById("email").value; 
    if (str.match(/@/g)  )
        return false;

    else 
        return true; 
} 
   

