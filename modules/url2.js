const parsearUrll = (direccion) => {
    try {
        const parsedUrl = new URL(direccion);

       
        const parametros = {};
        parsedUrl.searchParams.forEach((valor, clave) => {
            parametros[clave] = valor;
        });

        return {
            host: parsedUrl.origin,
            pathname: parsedUrl.pathname,
            parametros: parametros
        };
    } catch (error) {
        console.error("Ocurrió un error al parsear la URL:", error.message);
        return null;
    }
};

module.exports = parsearUrll;
