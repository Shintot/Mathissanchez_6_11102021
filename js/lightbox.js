const lightbox = document.querySelector ("#lightbox")
const lightboxopen = document.querySelector("#img1");
const close = document.querySelector("#close1")
const links = document.querySelectorAll(".photographegallery a")
console.log(links)

// lancement modal


// ajout click sur les liens
for(let link of links){
    link.addEventListener("click", function(e){
        //desactivation liens
        e.preventDefault();
        //ajout image par click
        const image = lightbox.querySelector(".lightbox__contenant img");
        image.src= this.href;
        //affiche lightbox
        lightbox.classList.add("show")
    })

     // ferme lightbox
     close.addEventListener("click", function(){
        lightbox.classList.remove("show")
    });

     // ferme lightbox clic exterieur
     lightbox.addEventListener("click",function(){
        lightbox.classList.remove("show")
    });
}