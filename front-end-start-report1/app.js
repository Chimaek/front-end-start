var list=document.getElementById('list');
var page;
var allBoard=document.querySelectorAll('.nav > li'); //nav클래스 밑에 있는 리스트 선택
var str='';
var changeBlock=null;
function closeLoding(){
    document.getElementById('loading').style.display='none';
}
window.onload=closeLoding();
//*********로딩화면 ************//
document.getElementById('more').style.display="none"


for(var i=0;i<allBoard.length;i++){
    //*************** 클릭하여 탭이 바뀌는 이벤트 및 리스트에 뿌려주기***************//
  allBoard[i].addEventListener('click',function select(event){
    page=1;
    var board=event.currentTarget;
    if(changeBlock){
        changeBlock.classList.remove("active")
    }
    board.classList.add("active")
    changeBlock=board;
    str=''
    getJson();
    document.getElementById('more').style.display="block";
    document.getElementById('loading').style.display='block';
    
    });  
     
}


function getJson(){
    document.getElementById('loading').style.display="block";
    var id=document.querySelector('.active').id;
    var trending=`https://1boon.kakao.com/ch/trending.json?pagesize=10&page=${page}`;
    var issue=`https://1boon.kakao.com/ch/issue.json?pagesize=10&page=${page}`;
    var enter=`https://1boon.kakao.com/ch/enter.json?pagesize=10&page=${page}`;

    fetch(eval(id)).then(function(response){
        response.json().then(function(json){
            var data = json.data;
            for(var i=0;i<data.length;i++){
                var title=data[i].title;
                var coverImage=data[i].coverImage;
                var path=data[i].path;
                var totalView=data[i].totalView;
                str += `<div id="contain"> <span> <img src="${coverImage}"> </span> <div id="text"> <a href="https://1boon.kakao.com/${path}"> ${title} </a> </div> <div id="total"> 총 조회수: ${totalView} </div> </div>` ;
            }
            list.innerHTML=str;
            window.onload=closeLoding();
        })
    })
    
}

//*************** 더보기 클릭. ***************//
document.querySelector('.btn').addEventListener('click',function nextBtn(){
        page+=1;
        getJson()
        document.getElementById('loading').style.display='block';
        
    ;
        
});
