export class Calendario {
  static mostrarHistorial(fechas: Date[]): void {
    console.log("Historial de cumplimiento:");
    fechas.forEach(fecha => {
      console.log("- " + fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    });
  }
}
