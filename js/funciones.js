/* Funcion puestos */
const puestos = equipos => equipos.map(puestos => puestos.asignado.empleado.puesto);
console.log(puestos(equipos));

/* Funcion EdadMedia */
const edadMedia = equipos => equipos.reduce((i, equipo) => i + equipo.asignado.empleado.edad, 0) / equipos.length;
console.log(edadMedia(equipos, "Portátil"));

/* Funcion equiposPorEdad */
const equiposPorEdad = equipos => equipos.map(puestos => puestos.asignado.empleado.edad).sort();
console.log(equiposPorEdad(equipos));

/* Funcion EquiposTipo */
const equiposTipo = (equipos, tipo) => equipos.filter(equipo => equipo.tipo === tipo);
console.log(equiposTipo(equipos, "Portátil"));

const trabajadoresTipo = (trabajadores, tipo) => trabajadores.filter(equipo => equipo.tipo === tipo).map(empleados => empleados = [empleados.asignado.empleado]);

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
