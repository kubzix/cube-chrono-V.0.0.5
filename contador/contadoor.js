function tamnhocubo(){
    var tselecionado = document.getElementById('selcube').value
    
    if(tselecionado == '2x2x2'){
        gerar(12)
    }else if(tselecionado == '3x3x3'){
        gerar(24)
        
    } else if(tselecionado == '4x4x4'){
        gerar(45)
        
    }
}

//Gerador de scramble
function gerar(quantidade){
    
    let moves = [' U' ,' R' ,' L' , ' D' , ' F' , ' B']
    let scramble = []
    let moveAleatório; 
    let res = document.getElementById('res')
    res.innerHTML = ''
    
    
        for(i = 0; i <= quantidade; i++){

            do{
                moveAleatório = moves[Math.floor(Math.random() * moves.length)]
            }while (i > 0 && moveAleatório === scramble[i - 1])
        scramble.push(moveAleatório)
        if(quantidade == 45){
            if(Math.random() <= 0.9 && Math.random() > 0.8){
                scramble[i - 1] += "w"
            }
        }
        if(Math.random() <= 0.6){
        scramble[ i - 1] += "'"
        } else if(Math.random()<= 0.3){
        scramble[i-1] += "2"
        }
        
      
} 
res.innerHTML += scramble
return scramble.join(' ')

}

 




//TIMER AND INSPECTION TIME 



var tempoAtual = 0
var cron;
var emExecução = 'espeção'
var tempoExpeção  = 15

function verificar(){
    if(emExecução == 'iniciar'){
        porFogo();
        
    }else if(emExecução == 'espeção'){
        
        expe();      
        
    }else if(emExecução == 'parar'){
        
        apagarFogo();
        
    }
}

function expe(){
    emExecução = 'iniciar'
    tempoExpeção = 15
    
    cron = setInterval(function(){
        tempoExpeção-- 
        atualizarE()
        let tempE = document.getElementById('tempo')
        if(tempoExpeção == 0){
            
            tempE.innerHTML = 'DNF'
            tempE.style.font = 'normal 70pt arial black'
            tempE.style.color = 'red '
            clearInterval(cron)
        }else if(tempoExpeção >= 8 && tempoExpeção <= 15){
            tempE.style.font = 'normal 70pt arial black'
            tempE.style.color = 'green'
        }else if(tempoExpeção < 8){
            tempE.style.font = 'normal 70pt arial black'
            tempE.style.color = 'red'
        }
        
    }, 1000) // um segundo
   
    
   
}

function atualizarE(){
let temp = document.getElementById('tempo')
temp.innerHTML = tempoExpeção
temp.style.font = 'normal 70pt arial black'
temp.style.color = ('rgb(143, 143, 143)')

}

function porFogo(){
    clearInterval(cron);   
    emExecução = 'parar'
    tempoAtual = 0
    
        cron = setInterval(function(){
        tempoAtual++
        atualizarT()
        }, 1000)
        
        
    } 

function apagarFogo(){
    
    salvar()
        emExecução = 'espeção'
        
        tamnhocubo()
        clearInterval(cron);    
        
}
document.addEventListener('keydown' , function(evento){
    if(evento.key === " "){
        verificar()
    }
})
document.addEventListener('touchstart' , function(){
    verificar()
})
var media5;  
var media12;
var media100; 
var timeSolve = []
function salvar(){
    
        var lastSolve = document.getElementById('lSolve')
        timeSolve.push(tempoAtual)
        lastSolve.innerHTML = 'Last Solve<br>' + timeSolve[timeSolve.length - 1]
//media
        media5(timeSolve[timeSolve.length-5] 
            ,timeSolve[timeSolve.length-4] 
            ,timeSolve[timeSolve.length-3] 
            ,timeSolve[timeSolve.length-2] 
            ,timeSolve[timeSolve.length-1])

        media12(timeSolve[timeSolve.length-12] 
            ,timeSolve[timeSolve.length-11]
            ,timeSolve[timeSolve.length-10] 
            ,timeSolve[timeSolve.length-9] 
            ,timeSolve[timeSolve.length-8] 
            ,timeSolve[timeSolve.length-7] 
            ,timeSolve[timeSolve.length-6]
            
            ,timeSolve[timeSolve.length-5] 
            ,timeSolve[timeSolve.length-4] 
            ,timeSolve[timeSolve.length-3] 
            ,timeSolve[timeSolve.length-2] 
            ,timeSolve[timeSolve.length-1])
        
    function media5(p1 , p2 ,p3 ,p4 , p5){
        if(timeSolve.length >= 5){
            var somaM = p1 + p2 + p3 + p4 + p5
            media5 = somaM / 5
            var rMedia5 = document.getElementById('media5')
            rMedia5.innerHTML ='ao5<br>' + media5
            
    }
}
function media12(p1 , p2 ,p3 ,p4 , p5 , p6 , p7 , p8, p9 , p10 , p11 , p12){
    if(timeSolve.length >= 12){
        var somaM = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12
        media12 = somaM / 12
        var rMedia12 = document.getElementById('media12')
        rMedia12.innerHTML ='ao12<br>' + media12
        
}
}
}




        
function atualizarT(){
  let temp = document.getElementById('tempo')
        if(tempoAtual < 10){
            temp.innerHTML = '00 : 0' + tempoAtual 
        }else if(tempoAtual < 60){
            temp.innerHTML = '00 : ' + tempoAtual 
        }else if(tempoAtual < 70){
            temp.innerHTML = `01 : 0${tempoAtual - 60}`
        }
        else if(tempoAtual >=60 ){ 
            temp.innerHTML = `01 : ${tempoAtual - 60}`
        }
          if(tempoAtual >= 120 && tempoAtual < 130){
            temp.innerHTML = `02 : 0${tempoAtual - 120}`
        }else if(tempoAtual >= 130){
            temp.innerHTML = `02 : ${tempoAtual - 120}`
        }
        if(tempoAtual >= 180 && tempoAtual < 190){
            temp.innerHTML = `03 : 0${tempoAtual - 180}`
        }else if(tempoAtual >= 190){
            temp.innerHTML = `03 : ${tempoAtual - 180}`
        }
        
    
    temp.style.fontSize = '70pt'
    temp.style.color = ('rgb(143, 143, 143)')
}
