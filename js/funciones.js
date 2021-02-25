/* Función1. equiposMayoresEdad */
const equiposMayoresEdad = (equipos, edad) => equipos.filter(equipo => equipo.asignado.empleado.edad >= edad);

console.log(equiposMayoresEdad(equipos, 18));

/* Función2. equiposProvincia */
const equiposProvincia = (equipos, provincia) => equipos
  .filter(equipos => equipos.asignado.provincia.toLowerCase() === provincia.toLowerCase());

console.log(equiposProvincia(equipos, "Tarragona"));

/* Funcion4. puestos */
const puestos = equipos => equipos.map(puestos => puestos.asignado.empleado.puesto);
console.log(puestos(equipos));

/* Funcion5. EdadMedia */
const edadMedia = equipos => equipos.reduce((i, equipo) => i + equipo.asignado.empleado.edad, 0) / equipos.length;
console.log(edadMedia(equipos, "Portátil"));

/* Funcion6. equiposPorEdad */
const equiposPorEdad = equipos => equipos.map(puestos => puestos.asignado.empleado.edad).sort();
console.log(equiposPorEdad(equipos));

/* Funcion7. EquiposTipo */
const equiposTipo = (equipos, tipo) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo);
console.log(equiposTipo(equipos, "Portátil"));

/* Funcion8. trabajadoresTipo */
const trabajadoresTipo = (trabajadores, tipo) => trabajadores.filter(equipo => equipo.tipo === tipo).map(empleados => [empleados.asignado.empleado]);

console.log(trabajadoresTipo(equipos, "Portátil"));

/* Funcion9. equiposPorTipo */
const equiposPorTipo = equipos => {
  const equiposPortatil = ["Portátil", [equipos.filter(equipo => equipo.tipo === "Portátil").map(equipo => [equipo.asignado.empleado])]];
  const equiposSobremesa = ["Sobremesa", [equipos.filter(equipo => equipo.tipo === "Sobremesa").map(equipo => [equipo.asignado.empleado])]];
  const arrayFinal = [equiposPortatil, equiposSobremesa];
  return arrayFinal;
};
console.log(equiposPorTipo(equipos));

/* Funcion10. equiposTipoLocalidad */
const equiposTipoLocalidad = (equipos, tipo, localidad) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo && equipo.asignado.provincia.toLowerCase() === localidad).map(empleados => [empleados.asignado.empleado]);
console.log(equiposTipoLocalidad(equipos, "Portátil", "Tarragona"));

const resumenEquipos = equipos => equipos.map(equipo => {
  const resumenEquipos = {
    id: equipo.id,
    poblacion: equipo.asignado.poblacion,
    provincia: equipo.asignado.provincia
  };
  return resumenEquipos;
});
console.log(resumenEquipos(equipos));
