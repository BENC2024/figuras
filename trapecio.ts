export class Trapecio {

    private lado1 : number
    private lado2 : number
    private altura : number
    private baseMayor: number
    private baseMenor: number

    constructor(lado1 : number, lado2 : number, altura : number, baseMayor : number, baseMenor : number) {
        this.lado1 = lado1
        this.lado2 = lado2
        this.altura = altura
        this.baseMayor = baseMayor
        this.baseMenor = baseMenor
    }
    
    public getLado1():number{
        return this.lado1
    }
    public setLado1(lado1:number) {
        this.lado1 = lado1
    }

    public getLado2():number{
        return this.lado2
    }
    public setLado2(lado2:number) {
        this.lado2 = lado2
    }

    public getAltura():number{
        return this.altura
    }
    public setAltura(altura:number) {
        this.altura = altura
    }

    public getBaseMayor():number{
        return this.baseMayor
    }
    public setBaseMayor(baseMayor:number) {
        this.baseMayor = baseMayor
    }

    public getBaseMenor():number{
        return this.baseMenor
    }
    public setBaseMenor(baseMenor:number) {
        this.baseMenor = baseMenor
    }

    public calcularArea():number{
        return (this.baseMayor+this.baseMenor)*(this.altura/2)
    }
    public calcularPerimetro():number{
        return this.baseMayor+this.baseMenor+this.lado1+this.lado2
    }

}