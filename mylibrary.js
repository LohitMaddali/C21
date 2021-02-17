function bounceoff(O1, O2){

    if (O1.x - O2.x < O2.width/2 + O1.width/2
      && O2.x - O1.x < O2.width/2 + O1.width/2) {
    O1.velocityX = O1.velocityX * (-1);
    O2.velocityX = O2.velocityX * (-1);
  }
  if (O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y < O2.height/2 + O1.height/2){
    O1.velocityY = O1.velocityY * (-1);
    O2.velocityY = O2.velocityY * (-1);
   }
    
  }

function istouching(O1, O2){
    if (O1.x - O2.x < O2.width/2 + O1.width/2
        && O2.x - O1.x < O2.width/2 + O1.width/2
        && O1.y - O2.y < O2.height/2 + O1.height/2
        && O2.y - O1.y < O2.height/2 + O1.height/2) {
      O1.shapeColor = "red";
      O2.shapeColor = "red";
    }
    else {
      O1.shapeColor = "green";
      O2.shapeColor = "green";
    }

}