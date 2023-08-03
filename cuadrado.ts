export class Cuadrado {

    private lado : number

    constructor(lado : number) {
        this.lado = lado        
    }
    
    public getLado():number{
        return this.lado
    }

    public setLado(lado:number) {
        this.lado = lado
    }

    public calcularArea():number{
        return this.lado**2
    }
    public calcularPerimetro():number{
        return 4*this.lado
    }

} 