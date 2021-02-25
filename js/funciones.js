/* Función1. equiposMayoresEdad */
const equiposMayoresEdad = (equipos, edad) => equipos.filter(equipo => equipo.asignado.empleado.edad >= edad);

/* Función2. equiposProvincia */
const equiposProvincia = (equipos, provincia) => equipos
  .filter(equipos => equipos.asignado.provincia.toLowerCase() === provincia.toLowerCase());

/* Función3. provincias */
const provincias = (equipos) => equipos
  .map(equipo => equipo.asignado.provincia);

/* Funcion4. puestos */
const puestos = equipos => equipos.map(puestos => puestos.asignado.empleado.puesto);

/* Funcion5. EdadMedia */
const edadMedia = equipos => equipos.reduce((i, equipo) => i + equipo.asignado.empleado.edad, 0) / equipos.length;

/* Funcion6. equiposPorEdad */
const equiposPorEdad = equipos => equipos.map(puestos => puestos.asignado.empleado.edad).sort();

/* Funcion7. EquiposTipo */
const equiposTipo = (equipos, tipo) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo);

/* Funcion8. trabajadoresTipo */
const trabajadoresTipo = (trabajadores, tipo) => trabajadores.filter(equipo => equipo.tipo === tipo).map(empleados => [empleados.asignado.empleado]);

/* Funcion9. equiposPorTipo */
const equiposPorTipo = equipos => {
  const equiposPortatil = ["Portátil", [equipos.filter(equipo => equipo.tipo === "Portátil").map(equipo => [equipo.asignado.empleado])]];
  const equiposSobremesa = ["Sobremesa", [equipos.filter(equipo => equipo.tipo === "Sobremesa").map(equipo => [equipo.asignado.empleado])]];
  const arrayFinal = [equiposPortatil, equiposSobremesa];
  return arrayFinal;
};

/* Funcion10. equiposTipoLocalidad */
const equiposTipoLocalidad = (equipos, tipo, localidad) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo && equipo.asignado.provincia.toLowerCase() === localidad).map(empleados => [empleados.asignado.empleado]);

/* Funcion11. resumenEquipos */
const resumenEquipos = equipos => equipos.map(equipo => {
  const resumenEquipos = {
    id: equipo.id,
    poblacion: equipo.asignado.poblacion,
    provincia: equipo.asignado.provincia
  };
  return resumenEquipos;
});


