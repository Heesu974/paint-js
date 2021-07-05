// client 는 윈도우 전체의 범위 내에서 마우스 위치값을 나타내는 것.
// 원하는 값 canvas 내에서의 범위에서 마우스 위치값. 마우스 좌표를 알려면, offset.
// 따라서, canvas를 스크린 사이즈로 만들었다면, client값과 offset 값은 동일 했을 것.

const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}
function startPainting() {
    painting = true;
}
function onMousemove(event) {
    const x = event.offsetX;
    const y = event.offsetY;


}

function onMousedown(event) {
    painting = true;
}



function onMouseUp(event) {
    stopPainting();
}

//mouseup에는 라인을 후에 라인을 생성할 것이기 때문에 아래 eventlistener로서 적용시키지 않는다. (실제로 "그리는"작업에 대한 함수가 같이 들어와야 하기 때문에 eventlistener에서 확정지을 수 없다.)
//뒤에 강의 내용에 따라 그리는 작업에 대한 함수(startPainting)는 "onMouseDown"에 지정할 예정.




if (canvas) {
    canvas.addEventListener('mousemove', onMousemove);
    //마우스가 캔버스 내에 들어갔을 떄, 
    //마우스의 좌표를 얻기위한 함수
    canvas.addEventListener('mousedown', onMousedown);
    //마우스가 캔버스 내에 들어갔을 떄, 
    // 캔버스를 클릭하는 순간을 인지하게 하고,
    canvas.addEventListener('mouseup', onMouseUp);
    //캔버스를 클릭했을 때 painting을 시작(true)해야 하고, 마우스를 떼면 painting 값은 false가 되도록. 
    canvas.addEventListener('mouseleave', stopPainting);
}
