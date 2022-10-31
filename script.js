const input=document.getElementById('input');

const btn=document.querySelector('.btn');

let first=0,last=0,indentify=1;


btn.addEventListener('click',()=>{

    if(input.value.length==0){
     alert("Enter value first") ;
    }
    let s=input.value.toString();
     last=s.length-1;
    
     while(first<=last){
        if(s[first]!=s[last]){
            alert("not a palindrome");
            indentify=0;
            input.value='';
            break;
        }
        first++;
        last--;
    }
    if(indentify===1){
        alert("its a palindrome");
        input.value=" ";
    }
})
