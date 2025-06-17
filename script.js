// takes the encrypted message and decrypts it using atob(base64 decoding)
const {hash}=window.location;
decrypted=atob(hash.replace("#",''));

// if there is decrypted text then disables the two sections which are not needed and shows the secret message
if(decrypted){
    document.querySelector('.link').style.display="none";
    document.querySelector('.container').style.display="none";
    document.querySelector('.message').style.display="flex";

    document.querySelector('h1').innerHTML=decrypted;
}

// selects the form and listens for submission then is it is not empty encrypts it and shows it in section two ehich can then be send to others
document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    
    const input=document.querySelector('#inputText');
    if(input.value.trim() != ''){
    const encrypted=btoa(input.value);
    
    document.querySelector('.link').style.display="block";
    document.querySelector('.container').style.display="none";
    const linkInput=document.querySelector('#link-code');
    linkInput.value=`${window.location}#${encrypted}`;
    linkInput.select();
    }
    else
    alert("please enter an message!!");
})
