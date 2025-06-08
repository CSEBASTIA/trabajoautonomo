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
        const existe = this.habitos.some(h => h.id === habito.id);
        if (existe)
            throw new Error("El hábito ya existe para este usuario.");
        this.habitos.push(habito);
    }
    eliminarHabito(idHabito) {
        this.habitos = this.habitos.filter(h => h.id !== idHabito);
    }
}
exports.Usuario = Usuario;
