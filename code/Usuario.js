export class Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public habitos: Habito[] = []
  ) {}
}
