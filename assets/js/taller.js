const bottonSi=document.getElementById("si")
const bottonNo=document.getElementById("no")

bottonSi.addEventListener("click", function(){
    const image =document.getElementById("imgCambio")
    image.src="images/contento.png"
})

bottonNo.addEventListener("click", function(){
    const image =document.getElementById("imgCambio")
    image.src="images/triste.png"
})