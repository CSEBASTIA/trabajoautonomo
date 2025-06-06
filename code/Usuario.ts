import { Habito } from "./Habito";

export class Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public habitos: Habito[] = []
  ) {}

  agregarHabito(habito: Habito): void {
    // sin implementación
  }

  eliminarHabito(idHabito: number): void {
    // sin implementación
  }
}
