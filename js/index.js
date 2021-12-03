function dimension(){
    var ancho = window.innerWidth;
    var menu = document.getElementById('cont-links');
    if(ancho > 1023)menu.style.display = 'block'
    else menu.style.display = 'none';
}

function hamburguesa(){
    var menu = document.getElementById('cont-links');
    
    if (menu.style.display == 'block')menu.style.display = 'none';
    else menu.style.display = 'block';
}

function aparicion(id,name){
    var img = document.getElementById(id);
    var txt = document.getElementById(name);
    img.style.animation = "colores 5s infinite";
    img.style.backgroundImage = "url('img/svg/square-24854.svg')";
    img.style.backgroundColor = "black";
    img.style.backgroundSize = "100px";
    txt.style.display = 'block';
    txt.style.fontWeight = "bold";
    txt.style.color = "white";
}

function desaparicion(id,name,url){
    var txt = document.getElementById(name);
    img = document.getElementById(id);
    img.style.backgroundImage = `url(img/${url})`;
    img.style.backgroundSize = "cover";
    img.style.animation = "";
    txt.style.display = 'none';
}
