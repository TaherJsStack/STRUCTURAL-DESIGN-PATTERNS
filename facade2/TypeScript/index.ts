class Amplifier {
    public turnOn(): void{
        console.log("Turning on the amplifier ...");
    }
    public setVolume(volume: number): void{
        console.log("Setting the volume of the amplifier to " + volume);
    }
}

class DvdPlayer{
    public turnOn(): void{
        console.log("Turning on the DVD player...");
    }

    public play(movie: string): void{
        console.log("Playing " + movie);
    }
}

class Projector{
    public turnOn(): void{
        console.log("Turning on the projector...");
    }
    public setInput(dvdPlayer: DvdPlayer): void{
        console.log(`Setting the input of the projector to ${ dvdPlayer }`);
    }
}

class Lights{
    public dim(level: number): void{
        console.log("Dimming the lights to " + level);
    }
}

class HomeTheaterFacade{
    constructor(
        private amplifier: Amplifier, 
        private dvdPlayer: DvdPlayer, 
        private projector: Projector, 
        private lights: Lights
    ){}

    public watchMovie(movie: string, volume: number, level: number): void{
        this.lights.dim(level);
        this.amplifier.turnOn();
        this.amplifier.setVolume(volume);
        this.dvdPlayer.turnOn();
        this.projector.turnOn();
        this.projector.setInput(this.dvdPlayer);
        this.dvdPlayer.play(movie);
    }
}



let amplifier: Amplifier = new Amplifier();

let dvdPlayer: DvdPlayer = new DvdPlayer();

let projector: Projector = new Projector();

let lights: Lights = new Lights();

let homeTheaterFacade: HomeTheaterFacade = new HomeTheaterFacade(amplifier, dvdPlayer, projector, lights);

homeTheaterFacade.watchMovie("Star Wars", 10, 10);


