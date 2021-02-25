/* Función1. equiposMayoresEdad */
const equiposMayoresEdad = (equipos, edad) => equipos.filter(equipo => equipo.asignado.empleado.edad >= edad);

console.log(equiposMayoresEdad(equipos, 18));

const trabajadoresTipo = (trabajadores, tipo) => trabajadores.filter(equipo => equipo.tipo === tipo).map(empleados => [empleados.asignado.empleado]);

console.log(trabajadoresTipo(equipos, "Portátil"));

const equiposPorTipo = equipos => {
  const equiposPortatil = ["Portátil", [equipos.filter(equipo => equipo.tipo === "Portátil").map(equipo => [equipo.asignado.empleado])]];
  const equiposSobremesa = ["Sobremesa", [equipos.filter(equipo => equipo.tipo === "Sobremesa").map(equipo => [equipo.asignado.empleado])]];
  const arrayFinal = [equiposPortatil, equiposSobremesa];
  return arrayFinal;
};
console.log(equiposPorTipo(equipos));

const equiposTipoLocalidad = (equipos, tipo, localidad) => equipos.filter(equipo => equipo.tipo === tipo && equipo.asignado.provincia === localidad).map(empleados => [empleados.asignado.empleado]);

console.log(equiposTipoLocalidad(equipos, "Portátil", "Tarragona"));
