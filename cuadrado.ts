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

    public area():number{
        return this.lado*this.lado
    }
    public perimetro():number{
        return 4*this.lado
    }

} 