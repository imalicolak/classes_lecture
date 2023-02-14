// import negativeIndexes from 'use-negative-indexes';

// const students = [];

// const randNumb = Math.floor(Math.random() * students.length);

// console.log(negativeIndexes(students, randNumb));

// const batman = {
//     superHeroName: "Batman",
//     secretIdentity: "Bruce Wayne",
//     powers: ["being rich", "kryptonite immunity", "martial arts"],
//     money: 343999039593434;
//     health: 100, 
//     defense: 30,
//     strength: 27,
//     vehicles: ["batmobile"],
//     attack(objectBeingAttacked){
//         objectBeingAttacked.health -= Math.floor(Math.random() * this.strength);
//     },
//     potion(num){
//         this.health += num;
//     }
//     //this is for it's in this object. .this doesnt work with arrow objects. 
// }

// class Superhero{
//     constructor(name, secretIdentity, powers, money, defense, strength, vehicles) //only putting variables that will change from object to object. The constructor ONLY WANTS the variables changing from one instance of this class. 
//     this.superHeroName = name, //This is saying each instance of this object will have a key of superHeroName that takes in value user gives for name
//     this.secretIdentity = secretIdentity,
//     this.powers = powers,
//     this.money = money,
//     // health is going to be created on every instance of the object but it will always be 100
//     this.health = 100,
//     this.defense = defense,
//     this.strength = strength,
//     this.


// }

function annoyingUsers(input) {
    if(Array.isArray(input)) {
        return input;
    } 
    if(typeof input === 'string' || typeof input === 'number') return [input];
    return ["This user is just the worst"]
}

class Superhero {
    // The constructor ONLY WANTS the variables that will change from one instance of this class that creates an object to another instance
    // vehicles is not something they have to enter. If they don't, then I'm just going to make it an empty array. I do want them entering their powers though because those are those more important
    constructor(name, secretIdentity, nonsense, money, defense, strength, vehicles = []) {
        // This line below is saying each instance of this object will have a key of superHeroName that takes in the value they gave me for name
        this.superHeroName = name,
        this.secretIdentity = secretIdentity,
        // This is going to set powers to either what they entered if they gave me an array like I wanted or an empty array if they decided to annoy me (HFM)
        this.powers = annoyingUsers(nonsense),
        this.money = money,
        // health is going to be created on every instance of the object but it will always be 100!
        this.health = 100,
        this.defense = defense,
        this.strength = strength,
        this.vehicles = vehicles
    }
    attack(objectBeingAttacked) {
        return objectBeingAttacked.health -= Math.floor(Math.random() * this.strength);
    }
    potion(num) {
        return this.health += num;
    }
}

const batman = new Superhero("Batman", "Bruce Wayne", {me: "funny"}, 432123123, 30, 27, ["Batmobile"]);
const superman = new Superhero("Superman", "Clarke Kent", ["Journalism"], 21314, 26, 32);

batman.newMethod = () => {
    console.log("New stuff only batman can do")
}
// batman.health = 50;
// batman.potion(-50);
// batman.attack(superman);

console.log(batman);
console.log(superman);

// Take 20 minutes to setup a game, given the code from slack, and I want you to have 
// First batman attacks superman.
// Next, superman attacks batman
// A loop that continues unless the health of one of them is below 0. If one has a negative health, they died and their secret identity is revealed.



// if ( batman.health > 0 || superman.health > 0){
//     batman.attack(superman);
//     superman.attack(batman);
// } else if ( batman.health === 0 || superman.health === 0) {
//     console.log("Somebody died");

// } else (
//     batman.secretIdentity 
//     superman.secretIdentity
// )

while ( batman.health > 0 && superman.health > 0){
        batman.attack(superman);
        superman.attack(batman);

            if ( batman.health <= 0) {
                console.log(`Batman is dead. His secret identity is ${batman.secretIdentity}`);
                batman.attack(superman);
                break;
            } else if(superman.health <=0){
                console.log(`Superman is dead. His secret identity is ${superman.secretIdentity}`);
                superman.attack(batman);
                break;
            } else {


                console.log(`Batman's health is ${batman.health} & Superman's health is ${superman.health}`);

                
            }
}
