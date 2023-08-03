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

    public area():number{
        return (3.1416*(this.radio*this.radio))
    }
    public perimetro():number{
        return (2)*(3.1416)*(this.radio)
    }

} 