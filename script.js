const {hash}=window.location;
decrypted=atob(hash.replace("#",''));

if(decrypted){
    document.querySelector('.link').style.display="none";
    document.querySelector('.container').style.display="none";
    document.querySelector('.message').style.display="flex";

    document.querySelector('h1').innerHTML=decrypted;
}

document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    
    const input=document.querySelector('#inputText');
    if(input.value.trim() != ''){
    const encrypted=btoa(input.value);
    
    document.querySelector('.link').style.display="block";
    document.querySelector('.container').style.display="none";
    const linkInput=document.querySelector('#link-code');
    linkInput.value=`${window.location}#${encrypted}`
    linkInput.select()
    }
    else
    alert("please enter an message!!")
})
