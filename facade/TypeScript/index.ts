
class Grinder{
    public grindBeans(): void {
        console.log(' Grinding Beans Started .....')
    }
}

class Boliler{
    public boilWater(): void {
        console.log(' Boiling Water Started.....')
    }
}

class Brewer{
    public brewCoffee(): void {
        console.log(' Brewing Coffee Started.....')
    }
}

class CoffeeMakerFacade{
    constructor(
        private grinder: Grinder,
        private boliler: Boliler,
        private brewer: Brewer
    ){}

    public makeCoffee(): void {
        this.grinder.grindBeans();
        this.boliler.boilWater();
        this.brewer.brewCoffee();
        
        console.log(' Coffee Maker Finished.....')
    }

}



// -----------------------------------------------
let grinder:Grinder = new Grinder()
let boilWater:Boliler = new Boliler();
let brewer:Brewer = new Brewer();

let coffeeMakerFacade:CoffeeMakerFacade = new CoffeeMakerFacade(grinder, boilWater, brewer);

coffeeMakerFacade.makeCoffee();


