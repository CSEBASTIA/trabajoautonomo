export class Habito {
  constructor(
    public id: number,
    public nombre: string,
    public tipo: string,
    public descripcion: string,
    public historialCumplimiento: Date[] = []
  ) {
    if (!nombre || !tipo || !descripcion) {
      throw new Error("Todos los campos del hábito deben estar completos.");
    }
  }

  registrarCumplimiento(fecha: Date): void {
    this.historialCumplimiento.push(fecha);
  }

  obtenerPorcentajeCumplimiento(): number {
    const totalDias = this.historialCumplimiento.length;
    if (totalDias === 0) return 0;
    // Simulamos que debería haberse cumplido todos los días del mes
    const diasObjetivo = 30;
    return Math.min(100, (totalDias / diasObjetivo) * 100);
  }

  ultimaFechaCumplimiento(): Date | null {
    return this.historialCumplimiento.length > 0
      ? this.historialCumplimiento[this.historialCumplimiento.length - 1]
      : null;
  }
}
