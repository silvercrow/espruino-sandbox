require("FontDennis8").add(Graphics);

var on=false;
function switchGlowLight(){
on = !on;
  LED1.write(on);
}

function switchRedLed(){
on = !on;
  analogWrite(13,on);
}


function Write(word){
g.clear();
  g.setFontDennis8();
  g.drawString("\x90 \x91\x92\x93\x94\x95\x96\x97 "+word+" \x9f \x8c \x8d \x89",0,0);
g.drawString("\xa0 Bäh böse Ärzte in Küche\xaf",0,24);
  //g.drawString(word,30,10);
  g.flip();
}


setWatch(x=>switchGlowLight(), BTN2,{repeat:true});
setWatch(x=>switchRedLed(), BTN3,{repeat:true});

Write("David");
