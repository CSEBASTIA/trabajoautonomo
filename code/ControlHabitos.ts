import { Usuario } from "./Usuario";
import { Habito } from "./Habito";

export class ControlHabitos {
  constructor(public usuarios: Usuario[] = []) {}

  agregarUsuario(usuario: Usuario): void {
    // sin implementación
  }

  registrarHabito(idUsuario: number, habito: Habito): void {
    // sin implementación
  }

  marcarCumplimiento(idUsuario: number, idHabito: number, fecha: Date): void {
    // sin implementación
  }

  generarEstadistica(idUsuario: number): void {
    // sin implementación
  }
}
