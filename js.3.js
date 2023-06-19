

      // 아이콘 클릭시 .main-B 섹션으로 이동
document.addEventListener('DOMContentLoaded', function() {
        var image = document.querySelector('.icon_find');
        var sectionB = document.querySelector('.main-B');
      
        image.addEventListener('click', function(event) {
          event.preventDefault();
          sectionB.scrollIntoView({ behavior: 'smooth' });
        });
      });
      

      // button 클릭시 .main-C 섹션으로 이동
document.addEventListener('DOMContentLoaded', function() {
    var buttonB = document.querySelector('.main-B button');
    var sectionC = document.querySelector('.main-C');
    
    buttonB.addEventListener('click', function() {
        
        sectionC.scrollIntoView({ behavior: 'smooth' });
    });
    });


    window.addEventListener('scroll', fadeInMainB);
  
    function fadeInMainB() {
      const mainBSection = document.querySelector('section.main-B');
      const sectionTop = mainBSection.offsetTop;
      const sectionBottom = sectionTop + mainBSection.offsetHeight;
      const windowBottom = window.pageYOffset + window.innerHeight;
    
      if (windowBottom > sectionTop) {
        //스크롤된 비율 계산
        let scrollPercent = (windowBottom - sectionTop) / (sectionBottom - sectionTop) * 100;
        const speed = 1.7;
        scrollPercent = scrollPercent * speed;
        if (scrollPercent > 100) {
          scrollPercent = 100;
        }
        mainBSection.style.opacity = scrollPercent / 100;
    
        if (!mainBSection.classList.contains('fade-in')) {
          mainBSection.classList.add('fade-in');
        }
      }
    }



document.addEventListener('DOMContentLoaded', function() {
     var wrapDivs = document.querySelectorAll('.part-wrap');

    wrapDivs.forEach(function(div) {
        var image = div.querySelector('img');
        var infoParagraph = div.querySelector('.amount');

        // 이미지 호버 시 이벤트 처리
        image.addEventListener('mouseover', function() {

        image.style.transform = 'scale(1.4)';
        image.style.transition = 'transform 0.3s ease';

        infoParagraph.style.color = '#33607C';
        });

        // 이미지 호버 해제 시 이벤트 처리
        image.addEventListener('mouseout', function() {

        image.style.transform = 'scale(1)';
        image.style.transition = 'transform 0.3s ease';

        infoParagraph.style.color = '#585858';
        });
    });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var wrapDivs1 = document.getElementsByClassName('part-wrap2');
        var wrapDivs2 = document.getElementsByClassName('part-wrap3');
        var wrapDivs3 = document.getElementsByClassName('part-wrap4');
      
        function addHoverEvent(div) {
          var image = div.querySelector('img');
          var infoParagraph = div.querySelector('.amount');
      
          // 이미지 호버 시 이벤트 처리
          image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.2)';
            image.style.transition = 'transform 0.3s ease';
            infoParagraph.style.color = '#33607C';
          });
      
          // 이미지 호버 해제 시 이벤트 처리
          image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.3s ease';
            infoParagraph.style.color = '#585858';
          });
        }
      
        Array.from(wrapDivs1).forEach(function(div) {
          addHoverEvent(div);
        });
      
        Array.from(wrapDivs2).forEach(function(div) {
          addHoverEvent(div);
        });
      
        Array.from(wrapDivs3).forEach(function(div) {
          addHoverEvent(div);
        });
      });


      //sectionD 조립방법 순서
      const principles = [
        { summary: "먼저, 다리를 연결해줄 막대기에 나무로 된<br> 이음부 8개를 넣어 조립합니다. 그리고 다리<br>에 뚫린 구멍중에 막힌 구멍에 맞춰줍니다.<br> 이 과정을 4개의 막대기에 모두 진행합니다.", },
        { summary: "미리 조립되어 있는 주 다리 2개에 나무 <br> 각재를 연결합니다. 방향에 유의하여<br> 한쪽을 잘 끼운 다음, 나머지 주 다리도 연결하면.<br> 의자의 기틀이 어느정도 갖춰집니다.", },
        { summary: "동봉되어 있는 육각렌치를 활용해서 <br> 주 다리와 나무 각재에 육각 피스를<br>박습니다.구멍이 나있는 8개의 부분에<br>똑같이 진행해주시면 됩니다.", },
        { summary: "마지막으로 의자 좌판과 다리를 연결하시면됩니다.<br> 기준점이나 가이드라인이 없으니, 임의대로<br>가로세로를 맞추면 됩니다.<br>총 4부분을 연결하시면 됩니다.", },
        { summary: "동봉되어있는 플라스틱 고정물 4개를 <br>다리 밑에 있는 구멍에 끼운 뒤 고정하면 완성입니다.<br>다음과 같은 모양이 나오면 조립 완료입니다.", },
      
    
    
      ]
      
      const numberTag = document.querySelector(".D-assemble .D-info .number")
      const summaryTag = document.querySelector(".D-assemble .D-info .D-text")
      
      const productImg = document.querySelector(".D-image img")
      
      const leftButton = document.querySelector(".button_back")
      const rightButton = document.querySelector(".button_next")
    
      let currentNumber = 1;
    
      //뒤로가기 버튼 눌렀을 때 addEventLister//
      
      leftButton.addEventListener("click", function(){
      
        currentNumber--;
        if(currentNumber < 1){
          currentNumber = 5;
        }
      
        numberTag.innerHTML = currentNumber;
        productImg.src = `./image/assemble/0${currentNumber}.jpg`;
      
        summaryTag.innerHTML = principles[currentNumber-1].summary;
        detailTag.innerHTML = principles[currentNumber-1].detail;
      })
      
       //다음으로 가기 버튼 눌렀을 때 addEventLister//
    
      rightButton.addEventListener("click", function(){
      
        currentNumber++;
        if(currentNumber > 5){
          currentNumber = 1;
        }
      
        numberTag.innerHTML = currentNumber;
        productImg.src = `./image/assemble/0${currentNumber}.jpg`;
        
        summaryTag.innerHTML = principles[currentNumber-1].summary;
        detailTag.innerHTML = principles[currentNumber-1].detail;
      })
