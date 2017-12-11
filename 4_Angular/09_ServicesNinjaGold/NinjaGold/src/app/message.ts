export class Message {
    public id: number = null;
    public msgText: string = "";
    public created_at: Date = new Date();
    public updated_at: Date = new Date();
    constructor(_msg: string) {
        this.msgText = _msg;
    }
}