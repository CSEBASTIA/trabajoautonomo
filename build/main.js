"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Habito_1 = require("./Habito");
const Usuario_1 = require("./Usuario");
const ControlHabitos_1 = require("./ControlHabitos");
const Calendario_1 = require("./Calendario");
const usuario1 = new Usuario_1.Usuario(1, "Jean Pierre");
const habito1 = new Habito_1.Habito(101, "Beber agua", "Hidratación", "Tomar 8 vasos de agua");
const app = new ControlHabitos_1.ControlHabitos();
app.agregarUsuario(usuario1);
try {
    app.registrarHabito(usuario1.id, habito1);
    app.marcarCumplimiento(usuario1.id, habito1.id, new Date());
    app.generarEstadistica(usuario1.id);
    app.revisarAlertas();
    Calendario_1.Calendario.mostrarHistorial(habito1.historialCumplimiento);
}
catch (err) {
    if (err instanceof Error) {
        console.error("Error:", err.message);
    }
    else {
        console.error("Error desconocido:", err);
    }
}
