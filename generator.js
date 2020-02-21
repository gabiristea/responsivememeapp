let topTextInput;
let bottomTextInput;
let imageInput;
let generateBtn;
let canvas;
let ctx;

window.onload = function() {
    let input = document.getElementById('image-input');
    input.addEventListener('change', handleFiles, false);
}

function handleFiles(e) {
    let ctx = document.getElementById('meme-canvas').getContext('2d');
    let reader  = new FileReader();
    let file = e.target.files[0];

    // load to image to get it's width/height
    let img = new Image();
    img.onload = function() {
        
        // scale canvas to image
        ctx.canvas.width = img.width;
        ctx.canvas.height = img.height;

        // draw image
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    //to setup loading the image
    reader.onloadend = function () {
        img.src = reader.result;
    }

    // to read the file
   	reader.readAsDataURL(file);
}

