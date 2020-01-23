function setup() {
  createCanvas(400, 400);
}



function draw() {
  const secondConvert = 2 * PI / 60;
  const minuteConvert = 2 * PI / 60;
  const hourConvert = 2 * PI / 12;
  let s = second();
  let m = minute();
  let h = hour();
  let sc = s * secondConvert;
  let mc = m * minuteConvert;
  let hc = h * hourConvert;
  background(000);
  stroke(236, 153, 255);
  strokeWeight(5);
  noFill();
  let secondHand = arc(200, 200, 200, 200, 3 * PI / 2, sc - PI / 2);

  stroke(132, 255, 243);
  noFill();
  let minuteHand = arc(200, 200, 190, 190, 3 * PI / 2, mc - PI / 2);

  stroke(255, 249, 126);
  noFill();
  let hourHand = arc(200, 200, 180, 180, 3 * PI / 2, hc - PI / 2);



  strokeWeight(1);
  textSize(25);
  fill(255, 255, 255);
  text('3', 305, 205);
  text('12', 183, 95);
  text('6', 192, 323);
  text('9', 82, 205);
  text('4', 292, 268);
  text('5', 254, 310);
  text('7', 128, 310);
  text('8', 90, 259);
  text('10', 80, 149);
  text('11', 125, 107);
  text('1', 254, 110);
  text('2', 292, 151);

let twelveHour = hour();

  function twelve(){
    if(twelveHour > 12){
      twelveHour -= 12;
      return twelveHour;
    }

  }



  //text(twelve() + ':' + m +':'+s,200,20);







}
