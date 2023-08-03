import { Circulo } from "./circulo"
import { Cuadrado } from "./cuadrado"
import { Rectangulo } from "./rectangulo"
import { Rombo } from "./rombo"
import { Trapecio } from "./trapecio"
import { TrianguloRectangulo } from "./trianguloRectangulo"

let circulo1 = new Circulo(20)
let cuadrado1 = new Cuadrado(6)
let rectangulo1 = new Rectangulo(4,16)
let rombo1 = new Rombo(5,8,6)
let trapecio1 = new Trapecio(5,5,4,10,5)
let trianguloRectangulo1 = new TrianguloRectangulo(4,3)

console.log("AREAS")
console.log("El area del circulo es: "+circulo1.calcularArea())
console.log("El area del cuadrado es: "+cuadrado1.calcularArea())
console.log("El area del rectangulo es: "+rectangulo1.calcularArea())
console.log("El area del rombo es: "+rombo1.calcularArea())
console.log("El area del trapecio es: "+trapecio1.calcularArea())
console.log("El area del triangulo rectangulo es: "+trianguloRectangulo1.calcularArea()+"\n")

console.log("PERIMETROS")
console.log("El perimetro del circulo es: "+circulo1.calcularPerimetro())
console.log("El perimetro del cuadrado es: "+cuadrado1.calcularPerimetro())
console.log("El perimetro del rectangulo es: "+rectangulo1.calcularPerimetro())
console.log("El perimetro del rombo es: "+rombo1.calcularPerimetro())
console.log("El perimetro del trapecio es: "+trapecio1.calcularPerimetro())
console.log("El perimetro del triangulo rectangulo es: "+trianguloRectangulo1.calcularPerimetro()+"\n")

console.log("OTROS DATOS")
console.log("La hipotenusa del triangulo rectangulo es: "+trianguloRectangulo1.calcularHipotenusa())
console.log("Tipo: "+trianguloRectangulo1.determinarTipoTriangulo())