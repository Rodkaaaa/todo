class Cuenta {
    constructor(wea1, wea2, wea3, wea4) {
            this._wea1 = wea1;
            this._wea2 = wea2;
            this._wea3 = wea3;
            this._wea4 = wea4;
        } //self
}
let erick = []

let danielQl = new Cuenta("freddy", "ërick", "el pato", "su mama")
danielQl.wea1
console.log(danielQl._wea4)
for (const daniel in danielQl) {
    console.log(danielQl[daniel])
    erick = erick + daniel
}
console.log(erick)

function suma(danilQl) {
    var total = 0;
    for (let index = 0; index <= danilQl; index++) {
        total = total + index;
        console.log(total)
    }
}
suma(5)


function cortarUnias(perrito, patas) {
    if (perrito == true) {
        patas = patas * 5
        for (let i = 1; i <= patas; i++) {
            console.log("uña " + i + " cortada")
        }
        console.log("todas las uñas han sido cortadas")
    } else {
        console.log('el perrito no se dejo cortar las uñas')
    }
}