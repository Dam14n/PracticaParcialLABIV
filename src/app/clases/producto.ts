export class Producto {

    constructor(
        private _id: string, private _descripcion: string, private _tipo: string,
        private _fechaDeVencimiento: string, private precio: number, private _rutaDeFoto: string) { }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get rutaDeFoto(): string {
        return this._rutaDeFoto;
    }
    public set rutaDeFoto(value: string) {
        this._rutaDeFoto = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    public get fechaDeVencimiento(): string {
        return this._fechaDeVencimiento;
    }
    public set fechaDeVencimiento(value: string) {
        this._fechaDeVencimiento = value;
    }

}
