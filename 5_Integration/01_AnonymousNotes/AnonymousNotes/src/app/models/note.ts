export class Note {
    constructor(
        public id: Number = null,
        public noteText: String = "",
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ) { }
}
