import { createServer } from 'node:http'

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hola Munbod</h1>');
    res.write('<H2>ctm</H2>')
    res.end();
})

server.listen(3000, function() {
    console.log(`Port Libre: https://localhost:${this.address().port}`)
})