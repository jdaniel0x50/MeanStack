class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("This ninja's name is " + this.name);
    }

    showStats() {
        console.log(
            "Health: " + this.health + "\n" +
            "Speed: " + this.speed + "\n" +
            "Strength: " + this.strength
        )
    }

    drinkSake() {
        this.health += 10;
    }

    punch(OtherNinja) {
        const self = this;
        if (OtherNinja instanceof Ninja) {
            OtherNinja.health -= 5;
            console.log(
                self.name + " punched " + OtherNinja.name + "!\n" +
                OtherNinja.name + " lost 5 health!"
            )
        }
    }

    kick(OtherNinja) {
        const self = this;
        if (OtherNinja instanceof Ninja) {
            OtherNinja.health -= 10;
            console.log(
                self.name + " kicked " + OtherNinja.name + "!\n" +
                OtherNinja.name + " lost 10 health!"
            )
        }
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        super.strength = 10;
        super.speed = 10;
        this.wisdom = 10;
    }

    showSenseiStats() {
        super.showStats();
        console.log("Wisdom: " + this.wisdom);
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}



const redNinja = new Ninja("Hyabusa");
const blueSensei = new Sensei("George");

blueSensei.sayName();
blueSensei.showSenseiStats();
blueSensei.speakWisdom();
blueSensei.showStats();