

window.onload = function() {
    let chair01 = document.getElementById('chair01');
    let chair02 = document.getElementById('chair02');
    let chair03 = document.getElementById('chair03');
    let chair04 = document.getElementById('chair04');
    let chair05 = document.getElementById('chair05');
    let chair07 = document.getElementById('chair07');
  
    chair01.addEventListener('mouseover', function() {
      chair01.setAttribute("src", "./image/chair01-2.jpg");
    });
  
    chair01.addEventListener('mouseleave', function() {
      chair01.setAttribute("src", "./image/chair01.jpg");
    });
    
    chair02.addEventListener('mouseover', function() {
      chair02.setAttribute("src", "./image/chair02-2.jpg");
    });
  
    chair02.addEventListener('mouseleave', function() {
      chair02.setAttribute("src", "./image/chair02.jpg");
    });

    chair03.addEventListener('mouseover', function() {
      chair03.setAttribute("src", "./image/chair03-2.jpg");
    });
  
    chair03.addEventListener('mouseleave', function() {
      chair03.setAttribute("src", "./image/chair03.jpg");
    });
    
    chair04.addEventListener('mouseover', function() {
      chair04.setAttribute("src", "./image/chair04-2.jpg");
    });
  
    chair04.addEventListener('mouseleave', function() {
      chair04.setAttribute("src", "./image/chair04.jpg");
    });

    chair05.addEventListener('mouseover', function() {
      chair05.setAttribute("src", "./image/chair05-2.jpg");
    });
  
    chair05.addEventListener('mouseleave', function() {
      chair05.setAttribute("src", "./image/chair05.jpg");
    });
  
    chair07.addEventListener('mouseover', function() {
      chair07.setAttribute("src", "./image/chair07-2.jpg");
    });
  
    chair07.addEventListener('mouseleave', function() {
      chair07.setAttribute("src", "./image/chair07.jpg");
    });
  };

//텍스트 fade-in 효과
  window.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.C-text');
    element.style.animationDelay = '0.5s';
  
    element.addEventListener('animationend', function() {

  

      const windowWidth = window.innerWidth;
      const wrapWidth = wrap.offsetWidth;
      wrap.style.left = `${(windowWidth - wrapWidth) / 2}px`;
    });
  });

  //.A-text div 태그 안에 있는 button 클릭시 sectionB로 넘어감
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".A-text button");
    var sectionB = document.querySelector(".main-B");
  
    button.addEventListener("click", function() {
      sectionB.scrollIntoView({ behavior: 'smooth' }); // Scroll to section B smoothly
    });
  });
  

  