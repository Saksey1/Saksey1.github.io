//Change the button text by using innerHTML
document.getElementById("option1").innerHTML = "Run away from the horde.";
document.getElementById("option2").innerHTML = "Drink The Potion.";
//add a onclick function on the button using setAttribute
document.getElementById("option1").setAttribute("onClick", "l2q1()");
document.getElementById("option2").setAttribute("onClick", "l2q2()");

function l2q2() {
  // resetLinks();
  //add a onclick function on the button using setAttribute
  //
  document.getElementById("text1").innerHTML = "You start drinking the potion and you begin to feel energized...";
  document.getElementById("text2").innerHTML = "The second you finish drinking the potion, you start to feel very light. You realize that the zombies start to come towards you in a faster pace. You now have the choice of fighting them or going back to the nearby house.";
  //Change the button text by using innerHTML
  document.getElementById("option1").innerHTML = "Fight the horde of zombies.";
  document.getElementById("option2").innerHTML = "Hide at the nearby house.";
  document.getElementById("option1").setAttribute("onClick","l3q1()");
  document.getElementById("option2").setAttribute("onClick","l3q4()");
  
}

function l2q1() {
  document.getElementById("text1").innerHTML = "You hear a girl crying in the distance...";
  document.getElementById("text2").innerHTML = "The girl crying makes you feel scared and confused. You're not sure if you should go to the girl and the castle or go in search for a weapon";
  document.getElementById("option1").innerHTML = "Go to the nearby castle.";
  document.getElementById("option2").innerHTML = "Find a weapon";
  document.getElementById("option1").setAttribute("onClick","l4q2()");
  document.getElementById("option2").setAttribute("onClick","l3q3()");
}
function l2q11() {
  document.getElementById("text1").innerHTML = "You hear the same girl crying in the distance...";
  document.getElementById("text2").innerHTML = "The girl crying makes you feel scared and confused. You're not sure if you should go to the girl and the castle or back to where you killed the horde.";
  document.getElementById("option1").innerHTML = "Go to the nearby castle.";
  document.getElementById("option2").innerHTMl = "Go back.";
  document.getElementById("option1").setAttribute("onClick","l4q2()");
  document.getElementById("option2").setAttribute("onClick","l3q11()");
}

function l2q12() {
  document.getElementById("text1").innerHTML = "You hear a girl crying in the distance...";
  document.getElementById("text2").innerHTML = "The girl crying makes you feel scared and confused. You're not sure if you should go to the girl and the castle or back to where the weapon was to fight the horde";
  document.getElementById("option1").innerHTML = "Go to the nearby castle.";
  document.getElementById("option2").innerHTMl = "Go back.";
  document.getElementById("option1").setAttribute("onClick","l4q21()");
  document.getElementById("option2").setAttribute("onClick","l3q3()");
}

function l3q1() { 
  document.getElementById("text1").innerHTML = "The only weapon you have are your fists.";
  document.getElementById("text2").innerHTML = "So you dash straight at them with your fists. The zombie you punch topples over into another, which goes into another, like the dominoes effect, until they are all dead.";
  //Change the button text by using innerHTML
  document.getElementById("option1").innerHTML = "Continue following the path that was obstructed by the zombies.";
  document.getElementById("option2").innerHTML = "Go back to the path and go the other way";
  //add a onclick function on the button using setAttribute
  document.getElementById("option1").setAttribute("onClick","l3q3()");
  document.getElementById("option2").setAttribute("onClick","l2q11()");
}

function l3q11() {
  document.getElementById("text1").innerHTML = "The path that was blocked by zombies is now clear. It looks as if there is a weapon if you go to that path.";
  document.getElementById("text2").innerHTML = "It also looks slightly threatening.";
  document.getElementById("option1").innerHTML = "Go to the cleared path and find the weapon.";
  document.getElementById("option2").innerHTML = "Go back";
  document.getElementById("option1").setAttribute("onClick","l3q3()");
  document.getElementById("option2").setAttribute("onClick","l2q11()");
}

function l3q2() {
  document.getElementById("text1").innerHTML = "You decided to stay at the path...";
  document.getElementById("text2").innerHTML = "The air around you starts thickening then out of the blue a huge castle appears where it sounds like the girl is at.";
  //Change the button text by using innerHTML
  document.getElementById("option1").innerHTML = "Go back to the zombies and fight them. ";
  document.getElementById("option2").innerHTML = "Go to the castle to help the girl";
  //add a onclick function on the button using setAttribute
  document.getElementById("option1").setAttribute ("onClick", "fightzombie()");
  document.getElementById("option2").setAttribute("onClick","l4q2()");
}

function l3q3() {
  document.getElementById("text1").innerHTML = "You find a staff, cleverly hidden in the ground.";
  document.getElementById("text2").innerHTML = "Once you pick it up, it seems that another horde of zombies run at you faster.";
  document.getElementById("option1").innerHTML = "Fight the horde with your newfound staff.";
  document.getElementById("option2").innerHTML = "Go back.";
  document.getElementById("option1").setAttribute ("onClick", "fightzombiestaff()");
  document.getElementById("option2").setAttribute("onClick","l2q12()");
}

function l3q4() {
  document.getElementById("text1").innerHTML = "The horde is slowly walking in your direction.";
  document.getElementById("text2").innerHTML = "If you run out into the open, you will instantly be noticed. Attempting to hide might be a good option.";
  document.getElementById("option1").innerHTML = "Fight the horde.";
  document.getElementById("option2").innerHTML = "Hide.";
  document.getElementById("option1").setAttribute ("onClick", "fightzombie()");
  document.getElementById("option2").setAttribute("onClick","l4q3()");
}

function l4q1() {
  document.getElementById("text1").innerHTML = "The zombies look very strong and threatening. You aren't sure if you should fight them.";
  document.getElementById("text2").innerHTML = "It looks like a fight that you can't take.";
  document.getElementById("option1").innerHTML = "Fight the zombies.";
  document.getElementById("option2").innerHTML = "Go back.";
  document.getElementById("option1").setAttribute("onClick","l3q1()");
  document.getElementById("option2").setAttribute("onClick","l3q2()");
}

function l4q2() {
  document.getElementById("text1").innerHTML = "When you get close, the girl is eerily quiet. You're not sure if helping her is the right choice.";
  document.getElementById("text2").innerHTML = "There is an escape route nearby and it looks very tempting. Just out of the corner of your eye, you see a zombie outside the escape route. It looks like there will be a big fight.";
  document.getElementById("option1").innerHTML = "Help the girl.";
  document.getElementById("option2").innerHTML = "Run away.";
  document.getElementById("option1").setAttribute ("onClick","fightzombie()");
  document.getElementById("option2").setAttribute ("onClick","fightdemon()");
}

function l4q21() {
  document.getElementById("text1").innerHTML = "When you get close, the girl is eerily quiet. You're not sure if helping her is the right choice.";
  document.getElementById("text2").innerHTML = "There is an escape route nearby and it looks very tempting. Just out of the corner of your eye, you see a zombie outside the escape route. It looks like there will be a big fight.";
  document.getElementById("option1").innerHTML = "Help the girl.";
  document.getElementById("option2").innerHTML = "Run away.";
  document.getElementById("option1").setAttribute ("onClick","fightdemon()");
  document.getElementById("option2").setAttribute ("onClick","fightzombie()");
}

function fightzombie() {
   window.location="player-vs-zombie/index.html";
}

function fightdemon () {
  window.location="player-vs-demon/index.html";
}

function fightzombiestaff () {
  window.location="player-vs-zombiestaff/index.html";
}

function fightdemonstaff () {;
   window.location="player-vs-demonstaff/index.html";
}

function l4q3() {
  document.getElementById("text1").innerHTML = "The zombies seem to walk past you.";
  document.getElementById("text2").innerHTML = "You notice they are unable to notice you unless you make noise. You see a rock next to you.";
  document.getElementById("option1").innerHTML = "Throw the rock as a distraction.";
  document.getElementById("option2").innerHTML = "Stay completely still where you are.";
  document.getElementById("option1").setAttribute("onClick","fightzombie()");
  document.getElementById("option2").setAttribute("onClick","l5q3()");
}

function l5q3 () {
  document.getElementById("text1").innerHTML = "VICTORY";
  document.getElementById("text2").innerHTML = "The zombies walk past you as you stay completely still. They slowly wander off and you are able to sneakily leave.";
  document.getElementById("option1").style.display = 'none';
  document.getElementById("option2").style.display = 'none';
}
