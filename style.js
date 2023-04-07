

let inp=document.getElementById("inp");
let pass=document.getElementById("pass");
let flag=1;



function validationform(){

    if(inp.value==""){
        document.getElementById("usererror").innerHTML="User name is Empty"
        flag=0;
    }else if(inp.value.length<3){
        document.getElementById("usererror").innerHTML="user name required more than 3"
        flag=0;
    }else{
        document.getElementById("usererror").innerHTML=""
        flag=1;
    }

    if(pass.value==""){
        document.getElementById("passerror").innerHTML="Password is Empty"
        flag=0;
    }else{
        document.getElementById("passerror").innerHTML="" 
        flag=1;
    }
    if(flag){
       return true 
    }else{
        return false
    }
    return false;
}