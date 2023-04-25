let derecha=document.getElementById("derecha")
let izquierda=document.getElementById("izquierda")
let arriba=document.getElementById("arriba")
let abajo=document.getElementById("abajo")

let ariba=182.83750915527344
let izq=86.13750457763672
let der=310.4000053405762
let aba=626.6250114440918

let cajita=document.getElementById("cajita")

function calcularPosIz(){
    let llaveIz=true
    let posi=cajita.getBoundingClientRect()
    if(posi.left<izq){
        llaveIz=false
    }
    return llaveIz
}

function calcularPosDe(){
    let llaveDe=true
    let posi=cajita.getBoundingClientRect()
    if(posi.right>der){
        llaveDe=false
    }
    return llaveDe
}

function calcularPosAr(){
    let llaveAr=true
    let posi=cajita.getBoundingClientRect()
    console.log(posi.top)
    if(posi.top<ariba){
        llaveAr=false
    }
    return llaveAr
}

function calcularPosAb(){
    let llaveAb=true
    let posi=cajita.getBoundingClientRect()
    console.log(posi.bottom)
    if(posi.bottom>aba){
        llaveAb=false
    }
    return llaveAb
}

let x=0
let y=0

derecha.addEventListener("click",function(){
    if(calcularPosDe()){
        x+=3
        cajita.style.marginLeft=x+"%"
        cajita.style.transition="0.7s"  
    }
})

izquierda.addEventListener("click",function(){
    
    if(calcularPosIz()){
        x-=3
        cajita.style.marginLeft=x+"%"
        cajita.style.transition="0.7s"
    }
})

arriba.addEventListener("click",function(){
    if(calcularPosAr()){
        y-=5.2
        cajita.style.marginTop=y+"%"
        cajita.style.transition="0.7s"
    }
})

abajo.addEventListener("click",function(){
    if(calcularPosAb()){
        y+=5.2
        cajita.style.marginTop=y+"%"
        cajita.style.transition="0.7s"
    }
})


cajita.addEventListener("dragend",function(){
    alert("a")
})


