var textarea=document.getElementById('memo');

// 새 노트 클릭시 이벤트 발생 함수
function reset(){
    textarea.value="";
};
// 노트저장 클릭시 스토리지에 저장하는 이벤트 발생 함수
function noteSave(){
        localStorage.setItem("note",textarea.value);
        alert("노트의 내용이 저장되었습니다.");
};
// 저장된 내용 불러오기
window.onload=function(){
    if(localStorage.length>=1){
        textarea.value=localStorage.getItem("note");
    }
};
// 파일 저장하기 구현 (filesaver 사용)
function noteDownload(){
    var blob = new Blob([textarea.value], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Note.txt");
};
// 전체화면 구현(screenfull 사용)
function fullScreen(){
        screenfull.request();
        screenfull.on('change', () => {
            document.querySelector('html').addEventListener('click',function exit(){
                screenfull.exit();
        });
})};
// about버튼클릭시 팝업창으로 어플리케이션 정보 및 깃허브 주소 보여주기(제이쿼리 사용)
$('.btn-about').on({
    click: function() {
      $('.popup').addClass('popclassW');     
      setTimeout(function() {
         $('.popup').addClass('popclassH');
       },300);
    }
  });
  $('.popup').on({
    click: function() { 
      $('.popup').removeClass('popclassH');
      setTimeout(function() {
         $('.popup').removeClass('popclassW');
       },300); 
    } 
  });