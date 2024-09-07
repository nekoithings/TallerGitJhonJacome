function convertirUnidades(num) {
    const UNIDADES = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    return UNIDADES[num];
}

function convertirDecenas(num) {
    const DECENAS = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const DECENAS_MAYORES = ['veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];

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
    const CENTENAS = ['cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

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

function convertirUnidadesIngles(num) {
    const UNIDADES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return UNIDADES[num];
}

function convertirDecenasIngles(num) {
    const DECENAS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const DECENAS_MAYORES = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num < 10) {
        return convertirUnidadesIngles(num);
    } else if (num >= 10 && num < 20) {
        return DECENAS[num - 10];
    } else {
        const decena = Math.floor(num / 10);
        const unidad = num % 10;
        if (unidad === 0) {
            return DECENAS_MAYORES[decena - 2];
        } else {
            return DECENAS_MAYORES[decena - 2] + '-' + convertirUnidadesIngles(unidad);
        }
    }
}

function convertirCentenasIngles(num) {
    const CENTENAS = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    if (num >= 100) {
        const centena = Math.floor(num / 100);
        const resto = num % 100;
        if (resto === 0) {
            return CENTENAS[centena - 1];
        } else if (centena === 1) {
            return 'one hundred and ' + convertirDecenasIngles(resto);
        } else {
            return CENTENAS[centena - 1] + ' and ' + convertirDecenasIngles(resto);
        }
    } else {
        return convertirDecenasIngles(num);
    }
}

function convertirMilesIngles(num) {
    if (num >= 1000) {
        const miles = Math.floor(num / 1000);
        const resto = num % 1000;
        if (miles === 1) {
            if (resto === 0) {
                return 'one thousand';
            } else {
                return 'one thousand ' + convertirCentenasIngles(resto);
            }
        } else {
            if (resto === 0) {
                return convertirUnidadesIngles(miles) + ' thousand';
            } else {
                return convertirUnidadesIngles(miles) + ' thousand ' + convertirCentenasIngles(resto);
            }
        }
    } else {
        return convertirCentenasIngles(num);
    }
}

function numeroALetrasIngles(num) {
    if (num === 0) {
        return 'zero';
    }
    return convertirMilesIngles(num);
}

let resultadoOriginal = '';

function mostrarResultado() {
    const numInput = document.getElementById('numInput').value;
    const resultado = document.getElementById('resultado');
    const num = parseInt(numInput, 10);

    if (isNaN(num)) {
        resultado.textContent = 'Por favor, ingrese un número válido.';
    } else {
        resultadoOriginal = numeroALetras(num);
        resultado.textContent = resultadoOriginal;
    }
}

function traducirIngles() {
    const resultado = document.getElementById('resultado');
    if (resultadoOriginal === '') {
        resultado.textContent = 'Por favor, convierta un número primero.';
    } else {
        const numInput = document.getElementById('numInput').value;
        const num = parseInt(numInput, 10);
        resultado.textContent = numeroALetrasIngles(num);
    }
}
