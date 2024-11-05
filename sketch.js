
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);//背景顏色為黑色
  background("#99b2dd")
  noFill()//不填滿顏色
  stroke(255)//框線顏色為白色
 
  let rectWidth = 30 + mouseX / 20; 
  let circleSize = 25 + mouseY / 20;

  for(var i=0;i<width/50;i=i+1)
  {
    for(var j=0;j<height/50;j=j+1)
      {
        ellipse(25+50*i,25+50*j,circleSize)//產生直徑50的圓
  rect(0+50*i,10+50*j,50,rectWidth) //在座標(x:0,y:10)畫長50,寬30的長方形


  }
}
}