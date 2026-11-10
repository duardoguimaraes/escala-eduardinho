export type Escala =
  'Eduardinho' |
  'Celsius' |
  'Fahrenheit' |
  'Kelvin';

const valoresRef = {
  Eduardinho: {minimo: 35, maximo: 230 },
  Celsius: { minimo: 0, maximo: 100},
  Fahrenheit: { minimo: 32, maximo: 212 },
  Kelvin:{ minimo: 273, maximo: 373 },
};

export function converterTemperatura(
  temperatura: number,
  origem: Escala,
  destino: Escala
) 
{
  return valoresRef[destino].minimo +
  (
    (temperatura - valoresRef[origem].minimo) *
    (valoresRef[destino].maximo - valoresRef[destino].minimo)
  ) 
  /
  (valoresRef[origem].maximo - valoresRef[origem].minimo);
}