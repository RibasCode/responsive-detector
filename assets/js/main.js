'use strict'

window.onload = function() {

    setInterval(function() {
        let h1 = document.querySelector('h1');
        let h2 = document.querySelector('h2');
        
        let width = window.screen.width;
        let height = window.screen.height;
    
        let navScreenWidth = window.innerWidth;
        let navScreenHeight = window.innerHeight;
        
                            
        let screenSize = `${width} x ${height} <br> <span>Screen</span>`;
        let navScreenSize = `${navScreenWidth} x ${navScreenHeight} <br> <span>Browser Screen</span>`;
        
        h1.innerHTML = screenSize;
        h2.innerHTML = navScreenSize;
    }, 100);


};

