export class Todo {

    constructor(
        public id: number,
        public titre: string,
        public description: string,
        public est_fini: boolean,
        public date_creation: Date,
        public date_modification?: Date

    ) { }

    changeStatus(): void{
        this.est_fini = !this.est_fini;
    }

}
