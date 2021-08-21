
function preload(){
hp=loadImage("hp1.jpg")
Hp1=loadImage("hp2.jpg")
Hp2=loadImage("hp3.jpg")
Hp3=loadImage("hp4.jpg")
Hpotter4=loadImage("hp5.jpg")
bt=loadImage("bts1.jpg")
back=loadImage("bg.jpg")
qu=loadImage("OIP.jpg")
bp=loadImage("bp1.jpg")
av=loadImage("avenger1.jpg")
question=loadImage("quesh.png")
question1=loadImage("3f.png")
bv=loadImage("v.jpg")
Rm=loadImage("rm.jpg")
Jimin=loadImage("jimin.jpg")
junk=loadImage("Jungkook.jpg")
Aq=loadImage("avq.png")
Blackp=loadImage("Bpq.png")
Lisa=loadImage("lisa.jpg")
Rose=loadImage("rose.jpg")
Jennie=loadImage("jennie.png")
Jisoo=loadImage("jisoo.jpg")
av1=loadImage("avenger2.jpeg")
av2=loadImage("aavenger3.jpg")
av3=loadImage("avenger4.jpg")
av4=loadImage("avenger5.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  harry=createSprite(200, 150, 50, 50);
  harry.addImage(hp)
  bts=createSprite(1000,150,50,50)
  bts.addImage(bt)
  quiz=createSprite(650,450,50,50)
  quiz.addImage(qu)
  blackp=createSprite(200,500,50,50)
  blackp.scale=0.4
  blackp.addImage(bp)
  avenger=createSprite(1000,450,50,50)
  avenger.addImage(av)
 avenger.scale=0.6
  
}

function draw() {
  background("pink");  
 // textSize(30)
 // fill ("darkBlue")
 // text("QUIZZY QUIZARD",150,300)
  //text("CLICK ON THE IMAGE TO PLAY THE QUIZ",430,350)
  if(mousePressedOver(harry)){
    clear()
   // background(back)
    harry.destroy()
    bts.destroy()
    quiz.destroy()
    blackp.destroy()
    avenger.destroy()
    harry1=createSprite(200, 250, 50, 50);
    harry1.addImage(Hp2)
    harry1.scale=0.2
    harry2=createSprite(1000, 250, 100, 50);
    harry2.addImage(Hp3)
    harry2.scale=0.8
    harry3=createSprite(700, 500, 50, 50);
    harry3.addImage(Hpotter4)
    //harry3.scale=1
    harry4=createSprite(1250, 500, 50, 50);
    harry4.addImage(Hp1)
      hp12=createSprite(650,50,100,50)
      hp12.addImage(question)

  }
  if(mousePressedOver(bts)){
     clear()
     harry.destroy()
     bts.destroy()
     quiz.destroy()
     blackp.destroy()
     avenger.destroy()
  







 btsV=createSprite(200, 250, 50, 50);
btsV.addImage(bv)
 btsV.scale=0.2
 btsRm=createSprite(800, 350, 100, 50);
 btsRm.addImage(Rm)
 btsRm.scale=0.1
 btsJunk=createSprite(500, 500, 100, 100);
 btsJunk.addImage(junk)
 //harry3.scale=1
 btsJunk.scale=0.2
 btsjim=createSprite(1050, 500, 50, 50);
 btsjim.addImage(Jimin)
 btsjim.scale=0.2
      bt12=createSprite(650,50,100,50)
      bt12.addImage(question1)
   }
   if(mousePressedOver(blackp)){
     clear()
    // background(back)
  //  clear()
  //  text.remove()
  harry.remove()
  bts.destroy()
  quiz.destroy()
  blackp.destroy()
  avenger.destroy()
  bp12=createSprite(650,50,100,50)
  bp12.addImage(Blackp)
  bpl=createSprite(200, 550, 50, 50);
bpl.addImage(Lisa)
 bpl.scale=0.2
 bpr=createSprite(600, 550, 100, 50);
 bpr.addImage(Rose)
 bpr.scale=0.2
 bpje=createSprite(400, 550, 100, 500);
 bpje.addImage(Jennie)
 //harry3.scale=1
 bpje.scale=0.18
 bpj=createSprite(850, 550, 50, 70);
 bpj.addImage(Jisoo)
 bpj.scale=0.15
    
   }
   if(mousePressedOver(avenger)){
     clear()
    // background(back)
  //  clear()
  //  text.remove() 
  harry.destroy()
     bts.destroy()
     quiz.destroy()
     blackp.destroy()
     avenger.destroy()
     av12=createSprite(650,50,100,50)
     av12.addImage(Aq)
     aven1=createSprite(400, 550, 50, 50);
     aven1.addImage(av1)
      aven1.scale=0.2
      aven2=createSprite(600, 400, 100, 50);
      aven2.addImage(av2)
     aven2.scale=0.3
      aven3=createSprite(900, 550, 100, 500);
      aven3.addImage(av3)
      //harry3.scale=1
     aven3.scale=0.5
      aven4=createSprite(1200, 550, 50, 70);
      aven4.addImage(av4)
     aven4.scale=0.5
  
   }
 
  drawSprites();
 
}

 

