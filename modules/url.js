const url = require('url');

const parsearUrl = (direccion) => {
    const parsedUrl = new URL(direccion);

    return {
        host: parsedUrl.host,
        pathname: parsedUrl.pathname,
        parametros: parsedUrl.search
    };
}
module.exports = parsearUrl;