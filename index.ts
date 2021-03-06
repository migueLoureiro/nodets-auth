
import express from "express";

const app = express();
const port = process.env.PORT || 5000; // default port to listen

// define a route handler for the default home page
app.get( "/", (req:express.Request, res:express.Response) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
