export interface IPerson {
    id?: number;
    name_last?: string;
    name_first?: string;
}

export class Person implements IPerson {
    constructor(public id?: number, public name_last?: string, public name_first?: string) {}
}
