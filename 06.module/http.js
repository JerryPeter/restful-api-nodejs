const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello ini Module HTTP Node JS");
        res.end();
    } else if (req.url === "/about") {
        res.write("Ini Halaman ABOUT");
        res.end();
    } else if (req.url === "/contact") {
        res.write("Ini Halaman CONTACT");
        res.end();
    } else {
        res.write("Halaman tidak ditemukan!!");
        res.end();        
    }
});

server.listen(PORT);
console.log(`Server sedang berjalan pada http://localhost:${PORT}`);