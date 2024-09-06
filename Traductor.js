const UNIDADES = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const DECENAS = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const DECENAS_MAYORES = ['veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const CENTENAS = ['cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

function convertirUnidades(num) {
    return UNIDADES[num];
}

function convertirDecenas(num) {
    if (num < 10) {
        return convertirUnidades(num);
    } else if (num >= 10 && num < 20) {
        return DECENAS[num - 10];
    } else {
        const decena = Math.floor(num / 10);
        const unidad = num % 10;
        if (unidad === 0) {
            return DECENAS_MAYORES[decena - 2];
        } else {
            return DECENAS_MAYORES[decena - 2] + ' y ' + convertirUnidades(unidad);
        }
    }
}

function convertirCentenas(num) {
    if (num >= 100) {
        const centena = Math.floor(num / 100);
        const resto = num % 100;
        if (resto === 0) {
            return CENTENAS[centena - 1];
        } else if (centena === 1) {
            return 'ciento ' + convertirDecenas(resto);
        } else {
            return CENTENAS[centena - 1] + ' ' + convertirDecenas(resto);
        }
    } else {
        return convertirDecenas(num);
    }
}

function convertirMiles(num) {
    if (num >= 1000) {
        const miles = Math.floor(num / 1000);
        const resto = num % 1000;
        if (miles === 1) {
            if (resto === 0) {
                return 'mil';
            } else {
                return 'mil ' + convertirCentenas(resto);
            }
        } else {
            if (resto === 0) {
                return convertirUnidades(miles) + ' mil';
            } else {
                return convertirUnidades(miles) + ' mil ' + convertirCentenas(resto);
            }
        }
    } else {
        return convertirCentenas(num);
    }
}

function numeroALetras(num) {
    if (num === 0) {
        return 'cero';
    }
    return convertirMiles(num);
}
