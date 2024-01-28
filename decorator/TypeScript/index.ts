interface Coffee {
    cost(): number;
    description(): string;
}

abstract class CoffeeDecorator implements Coffee {
    
    constructor( protected coffee: Coffee ) {}

    abstract cost(): number;

    abstract description(): string;

}

class SimpleCoffee implements Coffee {

    public cost(): number {
        return 10;
    }

    description(): string {
        return 'Simple Coffee...'
    }
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


class SugarDecorator extends CoffeeDecorator {
    
    constructor( protected coffee: Coffee ) {
        super(coffee)
    }

    cost(): number {
        return this.coffee.cost() + 20;
    }

    description(): string {
        return `${ this.coffee.description() } && Sugar`
    }
}

// ------------------------------->

let coffee: Coffee = new SimpleCoffee()

coffee = new MilkDecorator(coffee);

coffee = new SugarDecorator(coffee);

console.log(`Cost ${coffee.cost()}`)

console.log(`Description ${coffee.description()}`)