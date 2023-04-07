let panel;
let start; // 이런 변수 스코프는 문제 없나?
let frames = 0;

const init = (parent = document.body) => {
    panel = create();

    requestAnimationFrame(() => {
        start = performance.now();
        parent.appendChild(panel);
        render();
    });
}

const create = () => {
    const div = document.createElement('div');

    div.style.position = 'fixed';
    div.style.left = '0px';
    div.style.top = '0px';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.backgroundColor = 'black';
    div.style.color = 'white';

    return div;
}

const render = () => {
    frames++;
    const now = performance.now();
    if (now >= start + 1000) {
        panel.innerText = frames;
        frames = 0;
        start = now;
    }
    
    requestAnimationFrame(render);
}

export {
    init
};