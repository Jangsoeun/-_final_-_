
//메인페이지//

window.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('image-container');
  var images = container.getElementsByTagName('img');
  var containerWidth = container.offsetWidth; // 이미지 컨테이너의 가로 너비
  var textElement = document.querySelector('.A-maintitle h2');

  // 스크롤 이벤트 리스너 추가
  window.addEventListener('wheel', function(event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    var scrollAmount = event.deltaY; // 스크롤 양

    // 이미지 컨테이너의 가로 스크롤 위치 조정
    container.scrollLeft += scrollAmount;

    // 이미지 크기와 활성화 여부를 조정
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var imageOffset = image.offsetLeft - container.offsetLeft; // 이미지의 왼쪽 위치
      var imageWidth = image.offsetWidth; // 이미지의 너비

      // 이미지가 컨테이너 중앙에 있는지 확인
      if (imageOffset <= containerWidth / 2 && imageOffset + imageWidth >= containerWidth / 2) {
        image.classList.add('centered'); // 중앙 이미지에 클래스 추가
        var title = image.getAttribute('data-title'); // 이미지에 설정된 제목 가져오기
        textElement.textContent = title; // .A-maintitle 요소의 텍스트 변경
      } else {
        image.classList.remove('centered'); // 나머지 이미지는 클래스 제거
      }

      // 이미지가 왼쪽으로 이동하도록 위치 조정
      var imageNewOffset = imageOffset - scrollAmount; // 이미지의 새로운 왼쪽 위치
      image.style.left = imageNewOffset + 'px';
    }

    // 이미지 순서 조정
    if (scrollAmount > 0) {
      container.appendChild(images[0]); // 첫 번째 이미지를 마지막으로 이동
    } else {
      container.insertBefore(images[images.length - 1], images[0]); // 마지막 이미지를 첫 번째로 이동
    }
  });
});

//세부페이지01//

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

  window.addEventListener('scroll', fadeInMainB);

  window.addEventListener('scroll', fadeInMainB);

  function fadeInMainB() {
    const mainBSection = document.querySelector('section.main-B');
    const sectionTop = mainBSection.offsetTop;
    const sectionBottom = sectionTop + mainBSection.offsetHeight;
    const windowBottom = window.pageYOffset + window.innerHeight;
  
    if (windowBottom > sectionTop) {
      //스크롤된 비율 계산
      let scrollPercent = (windowBottom - sectionTop) / (sectionBottom - sectionTop) * 100;
      // fade-in 효과 속도 조절하기 : 속도 상수 곱하기
      const speed = 1.7;
      scrollPercent = scrollPercent * speed;
  
      // scrollPercent 값이 100을 넘지 않도록 제한
      if (scrollPercent > 100) {
        scrollPercent = 100;
      }
      //mainBsection의 투명도를 scrollPercent값에 따라 설정
      mainBSection.style.opacity = scrollPercent / 100;
  
      if (!mainBSection.classList.contains('fade-in')) {
        mainBSection.classList.add('fade-in');
      }
    }
  }


  



  
  


