class Rectangle {
    constructor(private width: number, private height: number){}

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square {
    
    constructor( private side: number){}

    public getSide(): number {
        return this.side;
    }

    public getSquareArea(): number {
        return this.side * this.side;
    }

}

class SquareToRectangleAdapter {
    constructor(private square: Square) {}

    public getWidth(): number {
        return this.square.getSide();
    }

    public getHeight(): number {
        return this.square.getSide();
    }

    public getArea(): number {
        return this.square.getSquareArea()
    }

}


// ----------------------------------------------------

let square  = new Square(100);
let adapter = new SquareToRectangleAdapter(square)
console.log("adapter -->", adapter)


let area    = adapter.getArea();
console.log("area -->", area)

let height  = adapter.getHeight();
console.log("height -->", height)

let width   = adapter.getWidth();
console.log("width -->", width)


