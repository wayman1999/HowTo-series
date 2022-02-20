let btn = document.getElementsByClassName("secBtn");
let i;

for(i = 0;i < btn.length;i++){
    btn[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}