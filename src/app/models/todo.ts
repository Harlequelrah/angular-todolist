export class Todo {

    constructor(
        public id: number,
        public titre: string,
        public description: string,
        public date_creation: Date,
        public date_modification?: Date
    ) {}

}
