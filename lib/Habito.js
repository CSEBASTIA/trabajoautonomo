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
    }
    registrarCumplimiento(fecha) {
        // sin implementación
    }
    obtenerPorcentajeCumplimiento() {
        return 0;
    }
}
exports.Habito = Habito;
