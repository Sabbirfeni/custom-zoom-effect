let container = document.getElementById('container');
let img = document.getElementById('img');


container.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log(x + ' ' + y)
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)';
})

container.addEventListener('mouseleave', () => {

    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
})

const imageUploader = document.querySelector("input");

function showImage() {
    container.style.display = 'block'
    let reader = new FileReader();
    reader.readAsDataURL(imageUploader.files[0]);
    reader.onload = function(e) {
        img.classList.add("show");
        img.src = e.target.result;
    };
}