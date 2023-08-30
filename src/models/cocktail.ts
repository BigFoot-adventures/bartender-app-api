export class Cocktail {
    name: string;
    ingredients: string[];
    instructions: string;

    constructor(name: string, instructions: string, ingredients: string[]) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

}