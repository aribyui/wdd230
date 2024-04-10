const hamburgerButton = document.querySelector("#hamburger-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");

hamburgerButton.addEventListener("click", () =>  {
    
    navigation.classList.toggle("open");

    // Desbordamiento de CSS
    // https://www.w3schools.com/css/css_overflow.asp 📝
    // La propiedad 'overflow' especifica si se recortará el contenido 
    // o se agregarán barras de desplazamiento cuando el contenido 
    // de un elemento sea demasiado grande para caber en el área especificada.

    // La propiedad overflow tiene los siguientes valores:
    // visible- Por defecto. El desbordamiento no se recorta. El contenido se muestra fuera del cuadro del elemento.
    // hidden- El desbordamiento se recorta y el resto del contenido será invisible.
    // scroll- Se recorta el desbordamiento y se agrega una barra de desplazamiento para ver el resto del contenido.
    // auto- Similar a scroll, pero agrega barras de desplazamiento solo cuando es necesario

    // Alternar la clase "hidden" en el elemento <body> 
    // para evitar el desplazamiento de la página mientras el menú está abierto
    body.classList.toggle("hidden");
});

menuCloseButton.addEventListener("click", () => {      
    
    navigation.classList.remove("open");
    body.classList.remove("hidden");

});