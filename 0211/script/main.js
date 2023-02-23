
//1.  변수선언
//메인메뉴 클릭시 서브가 나오게
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let m_area01 = document.querySelector('main');
let m_area02 = document.querySelector('footer');


for(let i=0;i<gnb.length;i++){
  gnb[i].addEventListener('click',()=>{
      // alert('클릭 맞아요..');
      //console.log(gnb[i]);
      const child = gnb[i].children;
      //console.log(child[1]);
      
      //li태그 안에 있는 .sub모두 숨기기
      for(let j=0;j<sub.length;j++){
        sub[j].style.display='none';
      }

      //내가 선택한 li의 sub만 나오게
      child[1].style.display='block';
      // $(this).find('.sub').show();

      //$(this).parent().siblings().find('.sub').hide();
  });
}

//메인메뉴외 영역을 클릭시 서브가 숨겨진다.
m_area01.addEventListener('click',()=>{
  for(let i=0;i<gnb.length;i++){
    sub[i].style.display='none';
  }
});
m_area02.addEventListener('click',()=>{
  for(let i=0;i<gnb.length;i++){
    sub[i].style.display='none';
  }
});

$(function(){
  //메인슬라이드
  let m_img = $('#visual_slide div');
  const l_btn = $('#visual_slide .s_btn li:first-child');
  const r_btn = $('#visual_slide .s_btn li:last-child');
  const c_btn = $('#visual_slide .ctrl_btn li');

  let n = c_btn.index();

  //3초마다 반복호출되는 함수 작성
  function fadeInOut(){
    //console.log('내용 반복하기');
    m_img.stop().fadeOut();
    c_btn.removeClass('on');

    if(n==2){
      n=0;
    }else{
      n++;
    }
    c_btn.eq(n).addClass('on');
    m_img.eq(n).stop().fadeIn();
  }
  //좌측버튼 클릭시 실행되는 함수
  function fadeInOut2(){
    //console.log('내용 반복하기');
    m_img.stop().fadeOut();
    c_btn.removeClass('on');

    if(n==0){
      n=2;
    }else{
      n--;
    }
    c_btn.eq(n).addClass('on');
    m_img.eq(n).stop().fadeIn();
  }

  //시간객체를 사용하여 함수호출 setInterval(함수명, 시간);
  let Timer = setInterval(fadeInOut, 5000);

  // 콘트롤 버튼 클릭시 시간을 제거하고
  c_btn.hover(function(){
    clearInterval(Timer);
  },function(){  //마우스 아웃시 시간을 다시 생성하여 움직이게 한다.
    clearInterval(Timer);
    Timer = setInterval(fadeInOut, 5000);
  });

// 콘트롤 버튼 클릭시 해당 슬라이드 보이게하기
  c_btn.click(function(){
    n = $(this).index(); //클릭한 콘트롤 목록의 인덱스값을 다시 구하고
    m_img.fadeOut(); //보이는 이미지 모두 숨기고
    c_btn.removeClass('on'); //콘트롤버튼 서식을 모두제거
    m_img.eq(n).fadeIn(); //인덱스번호에 맞는 슬라이드가 보이게한다.
    c_btn.eq(n).addClass('on'); //해당하는 콘트롤버튼에 서식적용
  });

  // 좌측, 우측 방향버튼 클릭시 시간을 제거하고  해당 함수를 호출한다.
  l_btn.click(function(){
    clearInterval(Timer);
    fadeInOut2();
  });
  r_btn.click(function(){
    clearInterval(Timer);
    fadeInOut();
  });
  //좌, 우 버튼에 마우스 아웃시 다시 시간을 생성하여 자동으로 움직이게 한다.
  $('#visual_slide .s_btn').mouseleave(function(){
    Timer=setInterval(fadeInOut, 5000);
  });

  //탭콘텐츠 나오게하기
  // $('.tcon ul li').click(function(){
  //   $(this).find('a').addClass('tab_on').parent().siblings().find('a').removeClass('tab_on');
  // });
});

  //탭메뉴 콘텐츠 서식
  //1. 변수
  const tab_list = document.querySelectorAll('.tcon ul li a');
  const tcon = document.querySelectorAll('.tcon ul li div');

  //2. 탭메뉴 첫번째 li태그안에 있는 .cont를 보이게하기
  //$('.tcon ul li:first-child .cont').show();
  document.querySelector('.cont').style.display='block';

  for(let i=0;i<=tab_list.length;i++){
    tab_list[i].addEventListener('click', (e)=>{
      e.preventDefault();
      //console.log(tab_list[i]);
      //const child = tab_list[i].children;
      //console.log(child[i]);

      //선택한 li목록의 div태그를 화면에 보이게한다.
      for(let j=0;j<=tcon.length;j++){
        tcon[j].style.display='none'; //모두 숨기기

        tcon[i].style.display="block"; //선택한 li요소의 자손 tcon나오게

        //.t_con의 높이가 750이 되도록 한다.
        // tcon[i].parentNode().parentNode().style.height="750px";
        // console.log(tcon[i]);


        tab_list[j].classList.remove('tab_on');//모두 제거
        tab_list[i].classList.add('tab_on');//선택한 a요소에 서식을 적용.
        console.log(tab_list[j]);
        //e.currentTarget.querySelector('a').classList.add('tab_on');
      }
    });
  }




