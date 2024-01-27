interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {

    public cost(): number {
        return 10;
    }

    description(): string {
        return 'Simple Coffee...'
    }
}

abstract class CoffeeDecorator implements Coffee {
    
    constructor( protected coffee: Coffee ) {}

    abstract cost(): number;

    abstract description(): string;

}

class MilkDecorator extends CoffeeDecorator {
    
    constructor( protected coffee: Coffee ) {
        super(coffee)
    }

    cost(): number {
        return this.coffee.cost() + 2;
    }

    description(): string {
        return `${ this.coffee.description() } with milk `
    }
}

// ------------------------------->

let coffee: Coffee = new SimpleCoffee()

coffee = new MilkDecorator(coffee);

console.log(`Cost ${coffee.cost()}`)

console.log(`Description ${coffee.description()}`)