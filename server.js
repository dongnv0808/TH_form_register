const http = require('http');
const fs = require('fs');
const qs = require('qs');

let server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        fs.readFile('./views/register.html', (err, data) => {
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('404 not found');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else{
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('err', () => {
            console.log(err);
        });
        req.on('end', () => {
            console.log(qs.parse(data));
            return res.end('Register succes');
        })
    }
})

server.listen(8080, () => {
    console.log('Server running at localhost:8080');
})