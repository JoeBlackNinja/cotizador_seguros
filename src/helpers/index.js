export const dateDifference = (year) => {
  return new Date().getFullYear() - year;
};

export const calcularMarca = (marca) => {
  if (marca === "Chevrolet" || marca === "Nissan" || marca === "Ford") {
    return 20;
  } else if (marca === "Toyota" || marca === "Hyunday" || marca === "Audi") {
    return 18;
  } else if (marca === "Land Rover" || marca === "Volkswagen") {
    return 40;
  }
};

export const calcularPlan = (plan) => {
    if(plan === 'Basico'){
        return 5
    } else if (plan === 'Daños a terceros'){
        return 10
    } else if (plan === 'Viajero'){
        return 35
    } else if (plan === 'Cobertura total'){
        return 65
    }
}

export const formatearDinero = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency:'USD'
    })
}

export default { dateDifference, calcularMarca, calcularPlan, formatearDinero };
