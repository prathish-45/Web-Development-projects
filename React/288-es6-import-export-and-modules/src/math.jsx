const pi = 3.1415962;

function doublePi() {
    return pi * 2;
}

function triplePi() {
    return pi * 3;
}

export default pi;                  // For single export 
export {doublePi, triplePi};        // For more than single export