export class Rombo {

    private lado : number
    private diagonalMayor: number
    private diagonalMenor: number

    constructor(lado : number, diagonalMayor : number, diagonalMenor : number) {
        this.lado = lado
        this.diagonalMayor = diagonalMayor
        this.diagonalMenor = diagonalMenor
    }
    
    public getLado():number{
        return this.lado
    }
    public setLado(lado:number) {
        this.lado = lado
    }

    public getDiagonalMayor():number{
        return this.diagonalMayor
    }
    public setDiagonalMayor(diagonalMayor:number) {
        this.diagonalMayor = diagonalMayor
    }

    public getDiagonalMenor():number{
        return this.diagonalMenor
    }
    public setDiagonalMenor(diagonalMenor:number) {
        this.diagonalMenor = diagonalMenor
    }

    public area():number{
        return (this.diagonalMenor*this.diagonalMayor)/2
    }
    public perimetro():number{
        return 4*this.lado
    }

}