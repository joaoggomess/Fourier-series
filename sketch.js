//angulo usado na conversão de cartesiano para polar
let time = 0;
let wave = [];
let slider;
let slider2;

function setup() {
    createCanvas(600, 400);
    slider = createSlider(1, 10, 1)
    slider2 = createSlider(1, 10, 1)
}

function draw() {
    background(1);
    translate(200, 200);
 
    let x = 0;
    let y = 0;

    for (let i = 0; i < slider.value(); i++) {
        let prevx = x;
        let prevy = y;

        let n = i * 2 + 1;
        let radius = 75 * (4 / (n * PI));
        x += radius  * cos(n * time);
        y += radius * sin(n * time);

    

    stroke(250, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
   
    //fill(255);
    stroke(255)
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);


    }

    wave.unshift(y);

    translate(150, 0)
    line(x - 150, y, 0, wave[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

     if (wave.length > 200) {
      wave.pop();

    //progressão do desenho
    time -= slider2.value() / 50;

    
    }
}

