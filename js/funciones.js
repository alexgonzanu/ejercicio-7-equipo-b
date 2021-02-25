/* Función1. equiposMayoresEdad */
const equiposMayoresEdad = (equipos, edad) => equipos.filter(equipo => equipo.asignado.empleado.edad >= 30);

/* Función2. equiposProvincia */
const equiposProvincia = (equipos, provincia) => equipos
  .filter(equipos => equipos.asignado.provincia.toLowerCase() === provincia.toLowerCase());

/* Función3. provincias */
const provincias = (equipos) => equipos
  .map(equipo => equipo.asignado.provincia)
  .filter((provincia, i, provincias) => provincias.indexOf(provincia) === i);

/* Funcion4. puestos */
const puestos = equipos => equipos.map(puestos => puestos.asignado.empleado.puesto);

/* Funcion5. EdadMedia */
const edadMedia = equipos => equipos.reduce((i, equipo) => i + equipo.asignado.empleado.edad, 0) / equipos.length;

/* Funcion6. equiposPorEdad */
const equiposPorEdad = equipos => equipos.map(puestos => puestos.asignado.empleado.edad).sort();

/* Funcion7. EquiposTipo */
const equiposTipo = (equipos, tipo) => equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo);

/* Funcion8. trabajadoresTipo */
const trabajadoresTipo = (trabajadores, tipo) => trabajadores.filter(equipo => equipo.tipo.toLowerCase() === tipo).map(empleados => [empleados.asignado.empleado]);

/* Funcion9. equiposPorTipo */
const equiposPorTipo = equipos => {
  const tipos = equipos.map(equipo => equipo.tipo)
    .filter((equipo, i, equipos) => equipos.indexOf(equipo) === i);
  const arrayFinal = [];
  tipos.forEach(tipo => {
    const elementos = equipos.filter(equipo => equipo.tipo === tipo);
    arrayFinal.push({
      tipo,
      elementos
    });
  });
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
