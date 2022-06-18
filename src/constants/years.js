const YEARS = new Date().getFullYear();

export default Array.from(new Array(20), (valor, index) => YEARS - index);