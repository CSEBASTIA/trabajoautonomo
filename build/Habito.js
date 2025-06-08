"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habito = void 0;
class Habito {
    constructor(id, nombre, tipo, descripcion, historialCumplimiento = []) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.historialCumplimiento = historialCumplimiento;
        if (!nombre || !tipo || !descripcion) {
            throw new Error("Todos los campos del hábito deben estar completos.");
        }
    }
    registrarCumplimiento(fecha) {
        this.historialCumplimiento.push(fecha);
    }
    obtenerPorcentajeCumplimiento() {
        const totalDias = this.historialCumplimiento.length;
        if (totalDias === 0)
            return 0;
        // Simulamos que debería haberse cumplido todos los días del mes
        const diasObjetivo = 30;
        return Math.min(100, (totalDias / diasObjetivo) * 100);
    }
    ultimaFechaCumplimiento() {
        return this.historialCumplimiento.length > 0
            ? this.historialCumplimiento[this.historialCumplimiento.length - 1]
            : null;
    }
}
exports.Habito = Habito;
