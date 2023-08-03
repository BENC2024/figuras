export class Rectangulo {

    private base : number
    private altura : number

    constructor(base : number, altura:number) {
        this.base = base    
        this.altura = altura    
    }
    
    public getBase():number{
        return this.base
    }
    public setBase(base:number) {
        this.base = base
    }

    public getAltura():number{
        return this.altura
    }
    public setAltura(altura:number) {
        this.altura = altura
    }

    public area():number{
        return this.base*this.altura
    }
    public perimetro():number{
        return 2*this.base + 2*this.altura
    }

} 