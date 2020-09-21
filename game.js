// Creating variables
var myX = 0, myY = 0,updates=0;
var svetiLiNa=[], razmerY = 4, razmerX = 7, flag = true, gameOver = false, clickCount = 0;
for(let y=0; y<razmerY; y=y+1){
    svetiLiNa[y]=[];
    for(let x=0; x<razmerX; x=x+1){
        svetiLiNa[y][x]=randomInteger(2); //0 ili 1
    }
}
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
   for(let i = 0; i < razmerY; i ++){
        for(let j = 0; j < razmerX; j ++){
            if(svetiLiNa[i][j]){
                flag = false;
            }
        }
   }
   if(flag){
        console.log("Bravo");
        gameOver = true;
        if(clickCount < 50){
            console.log("You are genius!");
        }
   }
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    
    for(let y=0; y<razmerY; y=y+1){
        for(let x=0; x<razmerX; x=x+1){
            if(svetiLiNa[y][x]){
                drawImage(jelly[1],x*100,y*100,100,100);
            }else{
                drawImage(jelly[0],x*100,y*100,100,100);  
            }
        }
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    if(!gameOver){
        clickCount ++;
        var kliknatoX=Math.floor(mouseX/100);
        var kliknatoY=Math.floor(mouseY/100);
        console.log(kliknatoX, kliknatoY);
        if(kliknatoX >=0 && kliknatoX < razmerX && kliknatoY >= 0 && kliknatoY < razmerY){
            svetiLiNa[kliknatoY][kliknatoX] = !svetiLiNa[kliknatoY][kliknatoX];
            if(kliknatoY - 1 >= 0){
                svetiLiNa[kliknatoY-1][kliknatoX] = !svetiLiNa[kliknatoY-1][kliknatoX];
            }
            if(kliknatoY + 1 < razmerY){
                svetiLiNa[kliknatoY+1][kliknatoX] = !svetiLiNa[kliknatoY+1][kliknatoX];
            }
            if(kliknatoX - 1 >= 0){
                svetiLiNa[kliknatoY][kliknatoX-1] = !svetiLiNa[kliknatoY][kliknatoX-1];
            }
            if(kliknatoX + 1 < razmerX){
                svetiLiNa[kliknatoY][kliknatoX+1] = !svetiLiNa[kliknatoY][kliknatoX+1];
            }
        }
    }

};
