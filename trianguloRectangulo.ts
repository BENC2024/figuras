export class TrianguloRectangulo {

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
        return (this.base*this.altura)/2
    }
    public perimetro():number{
        let hipotenusa = this.hipotenusa()
        return this.base + this.altura + hipotenusa
    }
    public hipotenusa():number{
        let hipotenusa = (this.base**2 + this.altura**2)**(1/2)
        return hipotenusa
    }
    public tipoTriangulo():string{
        let mensaje = ""
        if (this.base == this.altura) {
            mensaje = "Es un triangulo rectangulo isóseles ya que sus dos catetos son iguales"
        }
        else{
            mensaje = "Es un triangulo rectangulo escaleno ya que sus dos catetos son diferentes"
        }
        return mensaje
    }

} 