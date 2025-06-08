"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlHabitos = void 0;
class ControlHabitos {
    constructor(usuarios = []) {
        this.usuarios = usuarios;
    }
    agregarUsuario(usuario) {
        if (this.usuarios.some(u => u.id === usuario.id)) {
            throw new Error("El usuario ya existe.");
        }
        this.usuarios.push(usuario);
    }
    registrarHabito(idUsuario, habito) {
        const usuario = this.usuarios.find(u => u.id === idUsuario);
        if (!usuario)
            throw new Error("Usuario no encontrado.");
        usuario.agregarHabito(habito);
    }
    marcarCumplimiento(idUsuario, idHabito, fecha) {
        const usuario = this.usuarios.find(u => u.id === idUsuario);
        if (!usuario)
            throw new Error("Usuario no encontrado.");
        const habito = usuario.habitos.find(h => h.id === idHabito);
        if (!habito)
            throw new Error("Hábito no encontrado.");
        habito.registrarCumplimiento(fecha);
    }
    generarEstadistica(idUsuario) {
        const usuario = this.usuarios.find(u => u.id === idUsuario);
        if (!usuario)
            throw new Error("Usuario no encontrado.");
        usuario.habitos.forEach(h => {
            console.log(`Hábito: ${h.nombre}`);
            console.log(`% Cumplimiento: ${h.obtenerPorcentajeCumplimiento().toFixed(2)}%`);
            console.log("Fechas cumplidas:", h.historialCumplimiento.map(f => f.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })).join(", "));
        });
    }
    revisarAlertas() {
        const hoy = new Date();
        this.usuarios.forEach(usuario => {
            usuario.habitos.forEach(habito => {
                const ultima = habito.ultimaFechaCumplimiento();
                if (!ultima) {
                    console.warn(`[ALERTA] El hábito '${habito.nombre}' no ha sido cumplido nunca.`);
                }
                else {
                    const dias = Math.floor((hoy.getTime() - ultima.getTime()) / (1000 * 60 * 60 * 24));
                    if (dias > 3) {
                        console.warn(`[ALERTA] El hábito '${habito.nombre}' no se cumple desde hace ${dias} días.`);
                    }
                }
            });
        });
    }
}
exports.ControlHabitos = ControlHabitos;
