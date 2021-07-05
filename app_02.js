//canvas는 기본적으로 html요소인데 context(픽셀로의 접근을 가능하게 한다)를 갖는다. 

const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

//context의 default
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

    //클릭하여 painting을 시작하기 전에 일어나는 행위
    if (!painting) {
        ctx.beginPath();

        // begin을 통해,
        //path의 시작점이 발생,

        ctx.moveTo(x, y);

        //moveTo를 통해,
        //마우스 포인터가 이동하는 offset|좌표|위치로 path의 시작점을, 클릭(mousedown)이 발생할 때까지 재정의/rematching하는 작업.
        console.log('creating path, ', x, y);
    } else {
        ctx.lineTo(x, y);



        //클릭(mousedown)이 발생하면, lineTo 실행,
        //여기서 마지막에 발생됐던 path의 시작점 좌표와, 클릭이 발생한 좌표를 잇는 라인 생성. 
        //마우스가 클릭된 상태로 이동하는 동안 반복 실행. 
        //여기서는 아직 사용자 눈에 보이지 않음. 



        ctx.stroke();

        //lineTo에서 발생한 라인에 색을 입혀주는 작업. 
        //이제 사용자 눈에 "라인"이 보임. 
        console.log('creating line, ', x, y);


    }

}
//여기서 모든 움직임을 감지하고, 라인을 만든다.

function onMousedown(event) {
    painting = true;
}


// canvas를 클릭하지 않고 떠다니는 행위는 path를 생성하는 행위.
//  시작점부터 끝나는 점까지 라인을 만들기 위해, 클릭하기를 기다리는 것. 
//  마우스를 따라 가상의 "시작점"을 만들다가, 마우스 클릭이 일어나면 이 path의 "시작점"으로부터 클릭된 line의 "시작점"이자 path의 "끝나는 지점"을 이어주는 작업을 바탕으로 라인이 생성된다.
//마우스를 'down' 드래그 시키면서 움직일 때 생성되는 라인은 무수히 연속되는 위의 작업(painting)에 의해 형성된다. 











if (canvas) {
    canvas.addEventListener('mousemove', onMousemove);
    //마우스가 캔버스 내에 들어갔을 떄, 
    //마우스의 좌표를 얻기위한 함수
    canvas.addEventListener('mousedown', startPainting);
    //마우스가 캔버스 내에 들어갔을 떄, 
    // 캔버스를 클릭하는 순간을 인지하게 하고,
    canvas.addEventListener('mouseup', stopPainting);
    //캔버스를 클릭했을 때 painting을 시작(true)해야 하고, 마우스를 떼면 painting 값은 false가 되도록. 
    canvas.addEventListener('mouseleave', stopPainting);
}
