require('dotenv').config()
const fs = require('fs')
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const SESSION_FILE_PATH = "./session.js"
const country_code = '569';
const numero= '67966472';
const msg = 'Hola mundo';
let sessionData;


if(fs.existsSync(SESSION_FILE_PATH)){
    sessionData = require(SESSION_FILE_PATH)
}
const client = new Client({
    session: sessionData,
}) ;
client.initialize()

client.on('qr', qr =>{
    qrcode.generate(qr, {small: true})
});

client.on('ready', ()=>{
    console.log('El cliente esta listo');

    let charId= country_code + numero + "@0c.us"

    client.sendMessage(charId, msg)
                .then(response => {
                if(response.id.fromME){
                console.log('El mensaje fue enviado')
            }
    })
});

client.on('authenticated', session => {
    sessionData = session

    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), err =>{
        if(err){
            console.log(err)
        }
    })
})
client.on('auth_failure', msg =>{
    console.err('Hubo un problema en la autenticacion, ' , msg)
})
client.on("message", message => {
    if (message.body === "Hello") {
        client.sendMessage(message.from, 'World!');
    }
});