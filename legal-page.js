if(window.self!==window.top)document.body.classList.add('embedded');
const back=document.querySelector('.legal-back');
if(back)back.addEventListener('click',()=>{
 let previousIsLocal=false;
 try{previousIsLocal=new URL(document.referrer).origin===location.origin;}catch{}
 if(previousIsLocal&&history.length>1)history.back();else location.assign('./index.html');
});
