export class Circulo {

    private radio : number

    constructor(radio : number) {
        this.radio = radio        
    }
    
    public getRadio():number{
        return this.radio
    }

    public setRadio(radio:number) {
        this.radio = radio
    }

    public calcularArea():number{
        return (3.1416*(this.radio**2))
    }
    public calcularPerimetro():number{
        return (2)*(3.1416)*(this.radio)
    }

} 