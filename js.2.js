       
       
       
       // 세부페이지2 이미지오버
       window.onload = function() {
        let best = document.getElementById('chair07');
        
        function mouseover() {
            best.setAttribute("src", "./img/chair07-2.jpg");
        }
        
        function mouseleave() {
            best.setAttribute("src", "./img/chair07.jpg");
        }
    };
    
    // 세부페이지2 제품개수 선택
    const minusBtn = document.querySelector(".left-btn");
    const plusBtn = document.querySelector(".right-btn");
    const amountNumTag = document.querySelector(".amount-btn p");
    console.log(amountNumTag);


    let amountNum = 1;

    plusBtn.addEventListener("click", function(){
        amountNum ++;
        amountNumTag.innerHTML = amountNum;
    });
    minusBtn.addEventListener("click", function(){
        amountNum --;
        amountNumTag.innerHTML = amountNum;
        if(amountNum<=0){
            amountNum = 1;
        }
    });

    //세부페이지2 제품 색상선택 
    const colorOptions = document.querySelectorAll('.A-color li');

    const image = document.querySelector('.A-image img');

    colorOptions.forEach((option) => {
    option.addEventListener('click', () => {

        const color = option.style.backgroundColor;

        switch (color) {
        case 'rgb(0, 0, 0)':
            image.src = './image/teodores_black.jpg';
            break;
        case 'rgb(98, 25, 18)':
            image.src = './image/teodores_wine.jpg';
            break;
        case 'rgb(255, 255, 255)':
            image.src = './image/teodores_white.jpg';
            break;
        }
    });
    });

    //세부페이지2 제품 설명 fade-in
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", fadeContent);
      
        function fadeContent() {
          var contentBlocks = document.querySelectorAll(".C-content");
          contentBlocks.forEach(function(block) {
            var blockTop = block.getBoundingClientRect().top;
            var windowBottom = window.innerHeight;
            if (blockTop < windowBottom) {
              block.classList.add("fade-in");
            }
          });
      
          var textElements = document.querySelectorAll(".B-text");
          textElements.forEach(function(element) {
            var elementTop = element.getBoundingClientRect().top;
            var windowBottom = window.innerHeight;
            if (elementTop < windowBottom) {
              element.classList.add("fade-in");
            }
          });
        }
      
        fadeContent(); 
      });

        //세부페이지2 이미지 마우스오버/아웃
        var originalImageSrc = "./image/teodores_black.jpg";
        var mainImage = document.getElementById("mainImage");

        function changeImage(element) {
            mainImage.src = element.src;
        }

        function restoreImage() {
            mainImage.src = originalImageSrc;
        }



