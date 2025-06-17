document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    
    const input=document.querySelector('#inputText');
    if(input.value.trim() != ''){
    const encrypted=btoa(input.value);
    console.log(encrypted);
    
    document.querySelector('.link').style.display="block";
    document.querySelector('#link-code').value=encrypted;
    }
    alert("please enter an message!!")
})
