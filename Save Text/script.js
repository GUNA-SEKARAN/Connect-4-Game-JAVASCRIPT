btn =document.querySelector(".save-btn");
slectMenu=document.querySelector(".SelectBox select")

headName=document.querySelector(".field input")






btn.addEventListener("click",()=>{
     textElemets=document.querySelector("textarea");
   slectMenu=document.querySelector(".SelectBox select")
   console.log(slectMenu.value)

    const blob=new Blob([textElemets.value],{type:slectMenu.value})

    const fileUrl=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.download=headName.value;
    link.href=fileUrl;
    link.click();
})