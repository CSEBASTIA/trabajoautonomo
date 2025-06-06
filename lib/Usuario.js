"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, nombre, habitos = []) {
        this.id = id;
        this.nombre = nombre;
        this.habitos = habitos;
    }
    agregarHabito(habito) {
        // sin implementación
    }
    eliminarHabito(idHabito) {
        // sin implementación
    }
}
exports.Usuario = Usuario;
