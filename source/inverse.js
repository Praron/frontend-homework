'use strict';

const inverse = (array, n = 0) => {   
    if (n >= 0) {
        return array.slice(0, n).concat(array.slice(n).reverse());
    }
    return array.slice(0, n).reverse().concat(array.slice(n));
}
