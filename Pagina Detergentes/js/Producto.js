let formatoMoneda = (valor) => {
    return valor.toLocaleString('es-Cl', { style: 'currency', currency: 'CLP', minimumFractionDigits: 2 })
}
class Producto {
    constructor(id, nombre, detalle, codigo, precio) {
        this._id = id;
        this._nombre = nombre;
        this._detalle = detalle;
        this._codigo = codigo;
        this._precio = precio;
    }
    get id() {
        return this._id
    }
    set id(id) {
        this._id = id
    }
    get detalle() {
        return this._detalle
    }
    set detalle(detalle) {
        this._detalle = detalle
    }
    get detalle() {
        return this._detalle
    }
    set detalle(detalle) {
        this._detalle = detalle
    }
    get precio() {
        return this._precio
    }
    set precio(precio) {
        this._precio = precio
    }
    toString() {
        return `nombre: ${this._nombre}, Descripcion: ${this._detalle}, Precio: ${formatoMoneda(this._precio)}, ID: ${this._id}, Codigo de barra: ${this._codigo}`
    }
}


let producto1 = new Producto(1, "Detergente", "Detergente con olor alimon de 5lt.", 34512345, 1250)

console.log(producto1.toString());