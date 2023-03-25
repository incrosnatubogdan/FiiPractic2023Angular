export class Note {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public specialField?: string,
        public color?: string
    ) { }
}