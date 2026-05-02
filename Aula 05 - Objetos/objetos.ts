const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

console.log(car);


const car2: { type: string, mileage?: number } = { // O sinal de interrogação indica que a propriedade é opcional
  type: "Toyota"
};
car2.mileage = 2000;