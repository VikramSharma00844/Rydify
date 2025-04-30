const server_url="http://localhost:5000/";

function getCookie(name){
    const value=`; ${document.cookie}`;
    const parts=value.split(`; ${name}=`);
    if(parts.length==2)
        return parts.pop().split(";").shift();
}
    
export  {server_url,getCookie};