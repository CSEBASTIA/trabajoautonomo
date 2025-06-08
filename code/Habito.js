export class Habito {
  constructor(
    public id: number,
    public nombre: string,
    public cumplimientos: Date[] = []
  ) {}

  registrarCumplimiento(fecha: Date): void {
    this.cumplimientos.push(fecha);
  }
}
