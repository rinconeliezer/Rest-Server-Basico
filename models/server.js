const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Middlewares
        this.middlewares();
        //rutas de la app
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en ', this.port);
        });
    }

}
module.exports = Server;