/**
 * 1 return 001
 * 31 return 031
 * @param idValue: Number
 * @returns {string}
 */
function idString (idValue) {
    if ( (idValue / 10) < 1 ) { // [0, 9]
        return '00' + idValue
    }
    else if ( (idValue / 10) < 10) {    // [10, 99]
        return '0' + idValue
    }
    else {
        return '' + idValue
    }
}

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}