var num1 , num2;
var add,mul,sub,div;

function setup() {
  createCanvas(400, 400);

  num1=createInput();
  num1.position(5,60);
  num2=createInput();
  num2.position(5,200);

  add=createButton("ADDITON")
  add.position(300,60)
  add.mousePressed(addition)

}

function draw() {
  background("skyblue");

  n1=parseInt(num1.value () );
  n2=parseInt(num2.value () );
}

function addition(){
  console.log(n1+n2) ;
  text(n1+n2 , 200,200);
}