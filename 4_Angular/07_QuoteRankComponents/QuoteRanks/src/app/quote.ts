export class Quote {
    constructor(
        public id: number = null,
        public quoteText: string = "",
        public author: string = "",
        public votes: number = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) { }
}