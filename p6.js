const tabitems=document.querySelectorAll(".tab-item");
const tabitemcontent=document.querySelectorAll(".tab-content-item");

function selectitem(e){
    removeborder();
    this.classList.add("tabborder");
  
}

function say1(){
    document.getElementById("tab-2-content").style.display="none";
    document.getElementById("tab-3-content").style.display="none";
    document.getElementById("tab-1-content").style.display="block";
}

function say2(){
    document.getElementById("tab-1-content").style.display="none";
    document.getElementById("tab-3-content").style.display="none";
    document.getElementById("tab-2-content").style.display="block";
}

function say3(){
    document.getElementById("tab-1-content").style.display="none";
    document.getElementById("tab-2-content").style.display="none";
    document.getElementById("tab-3-content").style.display="block";
}

function removeborder(){
    tabitems.forEach(item=>item.classList.remove("tabborder"))
}

tabitems.forEach(item=>item.addEventListener('click',selectitem));

