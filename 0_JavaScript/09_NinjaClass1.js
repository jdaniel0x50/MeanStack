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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();