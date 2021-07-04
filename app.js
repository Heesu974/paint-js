// client 는 윈도우 전체의 범위 내에서 마우스 위치값을 나타내는 것.
// 원하는 값 canvas 내에서의 범위에서 마우스 위치값. 마우스 좌표를 알려면, offset.
// 따라서, canvas를 스크린 사이즈로 만들었다면, client값과 offset 값은 동일 했을 것.

const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting(event) {
    painting = false;
}

function onMousemove(event) {
    const x = event.offsetX;
    const y = event.offsetY;


}

function onMousedown(event) {
    painting = true;
}
//마우스가 캔버스 내에 들어갔을 떄, 
// 캔버스를 클릭하는 순간을 인지하게 하고,

function onMouseUp(event) {
    stopPainting();
}
//캔버스를 클릭했을 때 painting을 시작(true)해야 하고, 마우스를 떼면 painting 값은 false가 되도록. 
//mouseup에는 라인을 후에 라인을 생성할 것이기 때문에 아래 eventlistener로서 적용시키지 않는다. (실제로 "그리는"작업에 대한 함수가 같이 들어와야 하기 때문에 eventlistener에서 확정지을 수 없다.)



if (canvas) {
    canvas.addEventListener('mousemove', onMousemove);
    canvas.addEventListener('mousedown', onMousedown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', stopPainting);
}
