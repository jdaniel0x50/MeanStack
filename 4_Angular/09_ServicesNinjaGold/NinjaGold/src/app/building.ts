export class Building {
    public id: number = null;
    public name: string = "";
    public desc: string = "";
    public minGold: number = 0;
    public maxGold: number = 0;
    public created_at: Date = new Date();
    public updated_at: Date = new Date();
    constructor(_name: string, _minGold: number, _maxGold: number) {
        this.name = _name;
        this.minGold = _minGold;
        this.maxGold = _maxGold;
        this.desc = "Earns " + this.minGold + " to " + this.maxGold + " Gold";
    }
}