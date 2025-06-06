import { Habito } from "./Habito";
import { Usuario } from "./Usuario";
import { ControlHabitos } from "./ControlHabitos";

const usuario1 = new Usuario(1, "Jean Pierre");
const habito1 = new Habito(101, "Beber agua", "Hidratación", "Tomar 8 vasos de agua");

const app = new ControlHabitos();
app.agregarUsuario(usuario1);
app.registrarHabito(usuario1.id, habito1);
console.log("Aplicación cargada correctamente");
