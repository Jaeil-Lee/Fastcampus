
/* 1. SUB-MENU : 돋보기 클릭 화면 넓히기 */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});
 
// 포커스 
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

// 블러
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','')
});




/* 2. BADGE : 500 이상이면 투명하게 (숨기기) */
const badgeEl = document.querySelector('header .badges'); /* document는 HTML 자체 */

window.addEventListener('scroll', _.throttle(function (){   /* window -> 우리가 보고있는 화면 자체  */
  console.log(window.scrollY); 
  if(window.scrollY > 500){
    // 배지 숨기기 
    gsap.to(badgeEl,.6, {
      opacity:0 , 
      display:'none'
    });

  }else{
    // 배지 보이기    
    gsap.to(badgeEl,.6, {
      opacity:1 ,
      display:'block'
    });
  }
},300));  /* 300 = 0.3초를 의미  - 밀리세컨트 ,  1000ms = 1초   */




// 3. VISUAL : 시간차 나타나기 (순차적 애니메이션) 
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){

  gsap.to(fadeEl, 1, {
     delay: ( index + 1 ) * .7 ,  // 0.7 , 1.4 , 2.1 ,  2.7  초
     opacity: 1
  });
});



/* 4. NOTICE : 수직 슬라이드(Swiper)  */
/*   new Swiper ( 선택자 , 옵션)  */ 
new Swiper('.notice-line .swiper-container' , {
  direction: 'vertical',
  autoplay: true,        
  loop: true 
});




/* 5. PROMOTION : 프로모션 이미지 슬라이드(Swiper)  */
new Swiper('.promotion .swiper-container' ,{
  slidesPerView: 3 , // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,  //1번 슬라이드가 가운데 보이기  
  loop: true,
  autoplay : {
    delay: 5000
  },

  pagination: {
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true  // 사용자의 페이지 번호 요소 제어 가능 여부
  },

  navigation: {
    prevEl:'.promotion .swiper-prev' ,  // 이전 슬라이드
    nextEl:'.promotion .swiper-next'    // 다음 슬라이드 
  }
});