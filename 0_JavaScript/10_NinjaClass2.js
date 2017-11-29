function Ninja(name) {
    const speed = 3;
    const strength = 3;
    this.name = name;
    this.health = 100;

    this.showStats = function () {
        console.log(
            "Health: " + this.health + "\n" +
            "Speed: " + speed + "\n" +
            "Strength: " + strength
        )
    }
}

Ninja.prototype.sayName = function () {
    console.log("This ninja's name is " + this.name);
}
Ninja.prototype.drinkSake = function () {
    this.health += 10;
}
Ninja.prototype.punch = function(OtherNinja) {
    const self = this;
    if (OtherNinja instanceof Ninja) {
        OtherNinja.health -= 5;
        console.log(
            self.name + " punched " + OtherNinja.name + "!\n" +
            OtherNinja.name + " lost 5 health!"
        )
    }
}
Ninja.prototype.kick = function(OtherNinja) {
    const self = this;
    if (OtherNinja instanceof Ninja) {
        OtherNinja.health -= 10;
        console.log(
            self.name + " kicked " + OtherNinja.name + "!\n" +
            OtherNinja.name + " lost 10 health!"
        )
    }
}

const redNinja = new Ninja("Hyabusa");
const blueNinja = new Ninja("George");

redNinja.punch(blueNinja);
blueNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();

blueNinja.drinkSake();
blueNinja.showStats();
