 //Plasmids ~ Kioni 2015®

var mod = 0;


var power = 0;


var sprintTick = 1;


var spon = 1;


var regen = 0;


var countdown = 30;


var level = null;

var xp = null;

var mine = 0;

var iron = 0;

var gold = 0;

var diamond = 0;

var cc = 1;


var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();


var buttonWindow = null;


var button = new android.widget.Button(activity);


var ether = null;


function newLevel() { 


       


if(ether == null)


        {


          ether = ModPE.readData("ether");

          if(ether == null)


        {


          ether = 0;


        }

        }


if(level == null)


        {


          level = ModPE.readData("level");

          if(level == null)


        {


          level = 0;


        }

        }


if(xp == null)


        {


          xp = ModPE.readData("xp");

          if(xp == null)


        {


          xp = 0;


        }

        }


  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


    


        try { 


          buttonWindow = new android.widget.PopupWindow();


          


          var layout = new android.widget.RelativeLayout(activity);



          


          button.setText("*" + ether + "*"); 


          


          button.setOnClickListener(new android.view.View.OnClickListener({


                


                onClick: function(viewarg) { 



                  if(mod==0)


        {


                 mod = 1;


        clientMessage("Adam Ready");


        }


  		else if(mod==1){


   				 mod = 0;


    	clientMessage("Adam Locked");


 		}


                }


          }));


          layout.addView(button);


          buttonWindow.setContentView(layout);


          buttonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);


          buttonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);


          


          buttonWindow.setBackgroundDrawable(new


android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));


          


          buttonWindow.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 0);


          }catch(problem){


          print("Button could not be displayed: " + problem); //Print our error if we failed to make the button


        }


  }}));


}



function deathHook(attacker,victim)


{


if(ether < 100)


{


ether++;



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));


}


}




function leaveGame() { 



ModPE.saveData("ether", ether);

ModPE.saveData("level", level);

ModPE.saveData("xp", xp);



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


        if(buttonWindow != null) { 


          buttonWindow.dismiss(); 


          buttonwindow = null; 


        }


  }}));


}



function useItem(x,y,z,itemId,blockId,side)


{

if(blockId==47 && itemId==340 && xp < 4200 && Player.getCarriedItemCount() < 64)

{

clientMessage("x°•°•° +");

xp++;

addItemInventory(340,-1);

if(xp==99)

{

level++;

}

if(xp==499)

{

level++;

}

if(xp==1499)

{

level++;

}

if(xp==2099)

{

level++;

}

if(xp==2799)

{

level++;

}

if(xp==3299)

{

level++;

}

if(xp==3899)

{

level++;

}

if(xp==4199)

{

level++;

}

}

if(blockId==47 && itemId!=340)

{

clientMessage("Level" + level);

clientMessage("Current: " + xp);

if(level==0)

{

clientMessage("Next: 100");

}

if(level==1)

{

clientMessage("Next: 500");

}

if(level==2)

{

clientMessage("Next: 1500");

}

if(level==3)

{

clientMessage("Next: 2100");

}

if(level==4)

{

clientMessage("Next: 2800");

}

if(level==5)

{

clientMessage("Next: 3300");

}

if(level==6)

{

clientMessage("Next: 3900");

}

if(level==7)

{

clientMessage("Next: 4200");

}

if(level==8)

{

clientMessage("LEVEL MAX");

}

}

if(blockId==44 && itemId==266)

{

addItemInventory(266,-1);

gold++;

if(gold == 5)

{

clientMessage("Gold ready for summon!");

}

}

if(blockId==44 && itemId==406)

{

addItemInventory(406,-1);

}

if(blockId==44 && itemId==265)

{

addItemInventory(265,-1);

iron++;

if(iron == 10)

{

clientMessage("Iron ready for summon!");

}

}

if(blockId==44 && itemId==264)

{

addItemInventory(264,-1);

diamond++;

if(diamond == 3)

{

clientMessage("Diamond ready for summon!");

}

}

if(blockId==44 && itemId==359)

{

Player.setHealth(2);

if(iron == 3)

{

clientMessage("a lowly sacrifice..");

iron = 0;

gold = 0;

diamond = 0;

addItemInventory(388, 5);

ether++;

ether++;

ether++;

ether++;

ether++;


activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));

}

if(gold == 3)

{

clientMessage("a Kingly Sacrifice..");

iron = 0;

gold = 0;

diamond = 0;

addItemInventory(388, 20);

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;


activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));

}

}

if(blockId==26 && iron > 9 && gold > 4 && diamond > 2)

{

clientMessage("Summon Completed, The Abyss Awaits...");

addItemInventory(388, 60);

level = 0;

xp = 0;

iron = 0;

gold = 0;

diamond = 0;

spawnCow(x, y, z, "mob/creeper.png");

cc = 2;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;

ether++;


activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));

}


if(itemId==340 && blockId!= 47)

{

clientMessage("Plasmids:Telekinesis:5,Incinerate:5,Artic Blast:10,Boom:10,Fleet:15,Apocolic:20,Regenerate:20");

}


if(itemId==347)

{

clientMessage("X:" + Player.getX() + "Y:" + Player.getY() + "Z:" + Player.getZ());

}


if(power ==2&&mod ==1&&ether > 1){



setTile(x,y+1,z,51);

ether--;



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));


}


else if(power ==2&&mod==0){



print("Please Enable The Adam ");





}


if(power == 3&&mod ==1&&ether > 1){



setTile(x,y,z,79);
setTile(x,y+1,z,79);
setTile(x+1,y,z,79);
setTile(x-1,y,z,79);
setTile(x,y,z+1,79);
setTile(x,y,z-1,79);

ether--;



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));


}


else if(power == 3&&mod ==0){



print("Please Enable The Adam ");



}



if(power==4&&mod==1&&ether > 1){



explode(x,y,z,4);

ether--;



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));



}


}




function attackHook(attacker, victim)


{


if(power == 1&&mod == 1&&ether > 1)


	{


		setVelX(victim, 2);


		setVelY(victim, 20);

      ether--;



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));

	}


else if(power ==1&&mod ==0){



print("Turn On Adam");



}



}




function procCmd(cmd){


      var cmd = cmd.split(" ");


  		if(cmd[0]=="none"){


 		

      spon = 1;

 		power =0;


 		print("Disabling Adam.");


 		}


 		else if (cmd[0]=="telekinesis"&&ether > 4){


 					power = 1;


 					print("Telekinesis Enabled");


 		}


 		else if(cmd[0]=="incinerate"&&ether > 4){


 		power = 2;


 		print("Incinerate Enabled");


 		}


      else if(cmd[0]=="regen"&&ether > 19){


 		regen = 1;


 		print("Regenerate Started");

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));

 		}


      else if(cmd[0]=="fleet"&&ether > 14){


 		 spon = 2;


 		print("Fleet Enabled");

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));

 		}


 		else if(cmd[0]=="artic"&&ether > 9){


 		power = 3;


 		print("Artic Blast Enabled");


 		}


 		else if(cmd[0]=="boom"&&ether > 9){


 		power = 4;

      

 		print("Boom Enabled,Use Carefully Don't Kill Yourself...");


 		}


 		else if(cmd[0]=="apocolic"&&mod==1&&ether > 19){


 		for(nukeX=-5;nukeX<=5;nukeX++) {


				for(nukeZ=-5;nukeZ<=5;nukeZ = nukeZ + 3) {


					setTile(getPlayerX()+nukeX,getPlayerY()+5,getPlayerZ()+nukeZ,46);


					explode(getPlayerX()+nukeX,getPlayerY()+5,getPlayerZ()+nukeZ,1);

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               ether--;

               



  activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));


				}


				}


				}


	else if(cmd[0]=="nuke"&&mod==0){


 		print("Please Enable The Adam");


				}




 		


 		


}


 

function modTick()


{


if(regen == 1)

{


var health = Entity.getHealth(getPlayerEnt());


	if(health == 20 && level == 0) {

		regen = 0;

      clientMessage("HEALED for 20");

	}

   if(health == 200 && level == 1) {

		regen = 0;

      clientMessage("HEALED for 200");

	}

   if(health == 400 && level == 2) {

		regen = 0;

      clientMessage("HEALED for 400");

	}

   if(health == 800 && level == 3) {

		regen = 0;

      clientMessage("HEALED for 800");

	}

   if(health == 1000 && level == 4) {

		regen = 0;

      clientMessage("HEALED for 1000");

	}

   if(health == 2000 && level == 5) {

		regen = 0;

      clientMessage("HEALED for 2000");

	}

   if(health == 4000 && level == 6) {

		regen = 0;

      clientMessage("HEALED for 4000");

	}

   if(health == 8000 && level == 7) {

		regen = 0;

      clientMessage("HEALED for 8000");

	}

   if(health == 10000 && level == 8) {

		regen = 0;

      clientMessage("HEALED@10000");

	}

   if(health > 10000) {

		regen = 0;

      clientMessage("Strangely Overpowered");

	}

	if(regen == 1) {

		countdown--;

	} else if(regen == 0) {

		countdown = 30;

	}

	if(countdown == 0) {

		Player.setHealth(health + 1);

		countdown = 30;

	}

}


if(Entity.getHealth(getPlayerEnt())< 2)

{

ether = 0;


activity.runOnUiThread(new java.lang.Runnable({ run: function() {


                  try {


        button.setText("*" + ether + "*"); 


  }catch(problem){


          print("Error: " + problem);


        }}}));

}


if(ether > 99)


{


ether = 99;


}


if(spon == 2)


{


if(sprintTick == 1) {


			Xpos = Player.getX();


			Zpos = Player.getZ();


			sprintTick++;


		} if(sprintTick == 3) {


			sprintTick = 1;


			Xdiff = Player.getX() - Xpos;


			Zdiff = Player.getZ() - Zpos;


			Entity.setVelX(Player.getEntity(),Xdiff);


			Entity.setVelZ(Player.getEntity(),Zdiff);


			Xdiff = 0;


			Zdiff = 0;


		} if(sprintTick != 1) {


			sprintTick++;


		}


}else if(spon == 1)


{


  sprintTick = 1;


}


}


function destroyBlock (x, y, z, side)



{



	var axeIds = [258, 271, 275, 279, 286];



	var woodId = 17;



	var tile = getTile(x, y, z);



	var item = getCarriedItem();



	 if(item == axeIds[0] || item == axeIds[1] || item == axeIds[2] || item == axeIds[3] || item == axeIds[4])



	if(tile == woodId) { //check if original block touched was wood



		Level.destroyBlock(x, y, z, true); //destroys and drops original wood block



		for(var i = y+1;i < 128;i++) { //loop to look for wood blocks above original block (y+1 as original block has been destroyed at this point)



			if(getTile(x, i, z) == woodId) { //if the block is a wood block



				Level.destroyBlock(x, i, z, true); //destroys and drops wood block



			} else {



				break;



			}



		}



	}



}


function entityAddedHook(ent)

{

if(Entity.getEntityTypeId(ent)==33 && cc==2)

{

Entity.setHealth(ent, 0);

}

}
