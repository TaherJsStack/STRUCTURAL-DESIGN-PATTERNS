interface ServerRequest{
    handler(request: any ): void;
}

class BaseServer implements ServerRequest{
    public handler(request: any ): void {
        console.log(`Handel Request: `, request);
    }
}

abstract class ServerRequestDecorator implements ServerRequest {

    constructor( protected server: ServerRequest ) {}

    abstract handler(request: any): void;

}

class LoggingServerRequestDecorator extends ServerRequestDecorator {
    
    constructor( protected server: ServerRequest ) {
        super(server)
    }
    
    handler(request: any): void {
        this.server.handler(request);
        console.log(`Logging Request: `, request);
    }
}

class AuthMiddleware extends ServerRequestDecorator{
    
    constructor( protected server: ServerRequest ) {
        super(server)
    }
    
    handler(request: any): void {
        if (request.isAuthenticated) {
            console.log(`Logging Request Is Authenticated: `, request);
            this.server.handler(request);
        } else {
            console.log(`Logging Request Is Not Authenticated: `, request);
        }
    }
}

const request = {
    isAuthenticated: true,
    body: 'Body Content',
}

let server: ServerRequest = new BaseServer();

server = new LoggingServerRequestDecorator(server);

server = new AuthMiddleware(server);

server.handler(request)





