export class Country {
    prefix: string = "";
    name: string = "";
    displayName: string = "";

    constructor(prefix: string, name: string, displayName: string) {
        this.prefix = prefix;
        this.name = name;
        this.displayName = displayName;
    }
}