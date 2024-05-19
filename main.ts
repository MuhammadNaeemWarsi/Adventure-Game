#! /usr/bin/env node
import inquirer from "inquirer"

class Player{
name:string;
fuel:number=100
constructor(name:string){
    this.name= name;
}
fuelDecrease(){
    let fuel=this.fuel-25
    this.fuel=fuel;
}
fuelIncrease(){
    this.fuel=100
}


}
class Opponent{
    name:string;
    fuel:number=100
    constructor(name:string){
        this.name= name;
        
    }
    }
 
let player=await inquirer.prompt([
    {
        name:"name",
        input:"input",
        message:"please enter your name",
    }

])    
console.log(player.name)
let opponent=await inquirer.prompt([
    {  name:"select",
       type:"list",
       message:"Select your Opponent",
       choices:["Alien1","Alien2","Alien3"]


    }
])
console.log(opponent.select)
let p1= new Player(player.name)
let o1=new Opponent(opponent.name)

do {
    if(opponent.select == "Alien1"){ 

 }
   
 if(opponent.select == "Alien2"){ 

 }
 
 if(opponent.select == "Alien3"){ 

 }

 let ask= await inquirer.prompt([
            {
               name:"opt",
               type:"list",
               message:"what would you like to do?",
               choices:["Attack","Drink","run"]


        }
    ]);
   if (ask.opt == "Attack"){
    let num=Math.floor(Math.random()*2 )
   if(num > 0) {
         p1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);  
       }
    if(p1.fuel<=0){
        console.log("you lose","best of luck for nxt time")
        process.exit()
    }


if (num<=0 ){

        p1.fuelDecrease()
        p1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
    }
    if(o1.fuel<=0){
    console.log("you Win",)
 process.exit()
}

}
if(ask.opt =="Drink"){
  p1.fuelIncrease()
console.log(`you drink and your fuel is ${p1.fuel}`)
}
if(ask.opt == "Run"){
    console.log("you lose ,best of luck for next time")
    process.exit()
}



    }

while(true)