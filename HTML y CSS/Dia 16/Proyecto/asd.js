function encontrarCien(a){
    for (let  i = 0; i<=a; i++) {
        array = []
        if ( a%i==0 ) {
            console.log("tu wea esta buena");
            console.log(i)
            array.push(i)
           
        }else{
            console.log("tu wea no funciona");
            console.log(i)
        }
        array.push(i)
        console.log(array)
    }
    
}
encontrarCien(8);
