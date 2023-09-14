const svg = document.querySelector('svg');
const ul = document.querySelector('.nav-ul');

svg.style.display = 'none';

window.addEventListener('resize', () => {
    if (window.innerWidth < 1100) {
        svg.style.display = 'block';
        svg.style.position = 'absolute'
        svg.style.top = '38px'
        svg.style.right = "-340px"
        ul.style.display = 'none';
    } else {
        svg.style.display = 'none';
        ul.style.display = 'flex';
    }
});

svg.addEventListener('click', () => {
    if (ul.style.display === 'block') {
        ul.style.display = 'none';
    } else {
        ul.style.display = 'block';
    }
});