const { countries, currencies } = require('country-data');

const obtenerMoneda = (codigoPais) => {
    const pais = countries[codigoPais];

    if (!pais) {
        console.error("País no encontrado");
        return null;
    }

    const codigoMoneda = pais.currencies[0];
    const moneda = currencies[codigoMoneda];

    if (!moneda) {
        console.error("Moneda no encontrada");
        return null;
    }

    return moneda.name; 
};

module.exports = obtenerMoneda;