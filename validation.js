
function validate() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(pwd);

    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");
    
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(firstname)){
        alert('Invalid name given.');
    }else{
        alert('Valid name given.');
    }

    if(!regName.test(lastname)){
        alert('Invalid name given.');
    }else{
        alert('Valid name given.');
    }
    
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        alert("Please enter a valid e-mail address");  
        return false;  
    }   

}