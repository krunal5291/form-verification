const verification=(e)=>{
    e.preventDefault();

    let name=document.getElementById("name").value;
    let passworld=document.getElementById("passworld").value

    let nam=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;

    const pattern = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;



    if(nam.test(name)==false){

        alert("enter valid name");

    } 
    else{
        alert('valid name')
    }

    if(pattern.test(passworld)==false)
    {
        alert("enter valid passworld")
    }
    else{
        alert("valid passworld")
    }



}


document.querySelector("form").addEventListener("submit", verification)