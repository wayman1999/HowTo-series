function showCard(evt,cityName){
    let i,tabCont,tabBtn;
    tabCont = document.getElementsByClassName("card");
    tabBtn = document.getElementsByClassName("btn");
    for(i=0;i<tabCont.length;i++){
        tabCont[i].style.display = 'none';
    }
    for(i=0;i<tabBtn.length;i++){
        tabBtn[i].className = tabBtn[i].className.replace(" active","");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("active").click();