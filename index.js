var Username = document.forms['form']['UserName'];
var Password = document.forms['form']['Password'];

Username.addEventListener('textInput',Email_verify);
Password.addEventListener('textInput',pass_verify);

function btnPressed(){

    if(Username.value.length < 5){
        Username.style.border = "1px solid red";
        Username.focus();
        return false;
    }
    if(Password.value.length < 5){
         Password.style.border = "1px solid red";
         Password.focus();
         return false;
    }


   function Email_verify(){
    if(Username.value.length >= 8){
        Username.style.border = "1px solid silver"
        return true;
    }
}
    function pass_verify(){
        if(Password.value.length >= 8){
            Password.style.border = "1px solid silver"
            return true;
        }

   }
}   
