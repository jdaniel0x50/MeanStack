export class User {
    constructor(
        public id: Number = null,
        public first_name: String = "",
        public last_name: String = "",
        public email: String = "",
        public birthdate: Date = null,
        public address: String = "",
        public address_unit: String = "",
        public city: String = "",
        public state: String = "",
        public feeling: Boolean = false,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}