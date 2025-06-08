import { Habito } from "./Habito";

export class Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public habitos: Habito[] = []
  ) {}

  agregarHabito(habito: Habito): void {
    const existe = this.habitos.some(h => h.id === habito.id);
    if (existe) throw new Error("El hábito ya existe para este usuario.");
    this.habitos.push(habito);
  }

  eliminarHabito(idHabito: number): void {
    this.habitos = this.habitos.filter(h => h.id !== idHabito);
  }
}
