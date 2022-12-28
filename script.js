const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nava = document.getElementById('navabar');

if (bar) {
    bar.addEventListener('click', () => {
        nava.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nava.classList.remove('active');
    });
}
