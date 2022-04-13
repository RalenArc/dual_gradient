//Dual Gradient (Genuary 2022) by RalenArc

let palette1 = "390099-9e0059-ff0054-ff5400-ffbd00".split("-").map(a => "#" + a);
let palette2 = "f72585-7209b7-3a0ca3-4361ee-4cc9f0".split("-").map(a => "#" + a);

function setup() {
    createCanvas(window.innerHeight * 0.8, window.innerHeight);
}

function draw() {
    background(0);
    generateDesign();
    noLoop();
}

function generateDesign() {
    let pdg = 100;

    let width_q = Math.floor(random(120, 320));
    let height_q = 100;

    noStroke();

    for (i = 0; i < height / 10; i++) {
        for (j = 0; j < width / 10; j++) {
            push()
            translate(j * (width_q - height_q), i * width_q / (height_q / 10));
            let grad = drawingContext.createLinearGradient(-width_q / 2, 0, width_q / 2, 0);

            if (j % 2) {
                grad.addColorStop(0, random(palette2));
                grad.addColorStop(0.4, random(palette2));
            } else {
                grad.addColorStop(0, random(palette1));
                grad.addColorStop(0.4, random(palette1));
            }

            grad.addColorStop(1, 'transparent');
            drawingContext.fillStyle = grad;

            quad(-width_q / 2, -height_q / 2 - pdg, width_q / 2, -height_q / 2, width_q / 2, height_q / 2, -width_q / 2, height_q / 2 - pdg);
            pop()
        }
    }
}