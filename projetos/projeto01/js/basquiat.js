(function() {
    function mostraCaveira() {
        const botao = document.querySelector('#botaoCaveira')
        const container = document.querySelector('#CaveiraNone')
        botao.addEventListener('click',function() {
            if(container.style.display ==='none'){
                container.style.display = 'block'
            }else {
                container.style.display = 'none'
            }
        })
    }
    
    function mostraPescaria(){
        const botao = document.querySelector('#botaoPescaria')
        const container = document.querySelector('#PescariaNone')
        botao.addEventListener('click', function(){
            if(container.style.display === 'none'){
                container.style.display = 'block'
            }else {
                container.style.display = 'none'
            }
        })
        
    }
    
    function mostraDeusLei() {
        const botao = document.querySelector('#botaoDeusLei')
        const container = document.querySelector('#GodLawNone')
        botao.addEventListener('click', function() {
            if(container.style.display === 'none'){
                container.style.display = 'block'
            }else {
                container.style.display = 'none'
            }
        })
    }
    
    function mostraCoroas() {
        const botao = document.querySelector('#botaoCoroas')
        const container = document.querySelector('#coroasNone')
        botao.addEventListener('click', function() {
            if(container.style.display ==='none'){
                container.style.display = 'block'
            }else {
                container.style.display = 'none'
            }
        })
    }
    
    function mostraPassaro() {
        const botao = document.querySelector('#botaoPassaro');
        const container = document.querySelector('#PassaroNone')
        botao.addEventListener('click',function() {
            if(container.style.display === 'none'){
                container.style.display = 'block'
            }else {
                container.style.display = 'none'
            }
        })
    }
    
    function mostraPolicia() {
        const botao = document.querySelector('#botaoPolicia');
        const container = document.querySelector('#PoliciaNone')
        botao.addEventListener('click', function() {
            if(container.style.display === 'none'){
                container.style.display = 'block'
            }else {
                container.style.display = 'none'
            }
        })
    }
    
    function criaBgEscuro () {
       
        const mudaBG = document.querySelector('#mudaBG')
        mudaBG.addEventListener('click', function() {
            document.body.style.backgroundColor = 'grey' 
            
        })
    }



    function bgClaro() {
        const bgClaro = document.querySelector('#BGClaro')
        bgClaro.addEventListener('click',function() {
            document.body.style.backgroundColor = '#fff'
        })}
    
    function menuHamburguer() {
        const nav = document.querySelector('.ul-navig')
        const menu = document.querySelector('#menu-hamburguer')
     menu.addEventListener('click',function() {
        if(nav.style.display === 'none') {
            nav.style.display = 'block'
        }else {
            nav.style.display = 'none'
        }
     })
    }
        criaBgEscuro()
        bgClaro()
        menuHamburguer()
        mostraCaveira()
        mostraPescaria()
        mostraDeusLei()
        mostraCoroas()
        mostraPassaro()
        mostraPolicia()
    
})();