// Comando de terminal para guardar cambios y reiniciar el servidor automaticamente
//node --watch index.js 

//Dependencias de desarrollo para guardar cambios y reiniciar el servidor automaticamente

    //Instalar
    //npm i -D nodemon o npm i --save-dev nodemon

// Forma de detener puerto en uso
//npx kill-port 4000

// Instalar TypeScript
//npm i -D typescript ts-node

// Instalar mongoose
//npm i mongoose

// Sirve para leer las variables de entorno
// npm i dotenv

// Dependencia para dar colores al consola
//npm i colors

// Herencias en typescript

// Herencia interface
interface Product {
    id: number
    price: number
    name: string
}

interface FullProduct extends Product {
    image: string
}
// Herencia type
type Product3 = {
    id: number
    price: number
    name: string
}

type FullProduct3 = Product & {
    image: string
}

let product : Product = {
    id: 1,
    price: 30,
    name: "Tablet"
}

let product2 : FullProduct = {
    id: 2,
    price: 30,
    name: "Tablet 11 Pulgadas",
    image: "product.jpg"
}

// Lookup
interface ProductID {
    id: Product['id']
}

//Pick<Types, Keys>
type ProductID2 = Pick<Product, 'id'>

//Omit<Types, Keys>
type ProductID2 = Omit<Product, 'price' | 'name' | 'image'> 

// Libreria Slug
npm i slug // La version 10 da problemas para usarlo de la forma que indica
npm i slug@8.2.3 // Toco instalar la version 8.2.3 o usar slugfy


// Libreria de validacion Express-Validator
npm i express-validator