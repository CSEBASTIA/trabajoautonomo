"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendario = void 0;
class Calendario {
    static mostrarHistorial(fechas) {
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
exports.Calendario = Calendario;
