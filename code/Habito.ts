export class Habito {
  constructor(
    public id: number,
    public nombre: string,
    public tipo: string,
    public descripcion: string,
    public historialCumplimiento: Date[] = []
  ) {}

  registrarCumplimiento(fecha: Date): void {
    // sin implementación
  }

  obtenerPorcentajeCumplimiento(): number {
    return 0;
  }
}
