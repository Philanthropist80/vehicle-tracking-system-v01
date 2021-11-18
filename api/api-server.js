import path from 'path';
import swagger from './config/swagger';
import server from './api-server-config';
import authenticated from './middlewares/authenticate'

server.listen(server.get('port'), server.get('host'), () => {
    console.log(`Server running at http://${server.get('host')}:${server.get('port')}`);
});

// Landing page
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// Swagger API documentation
server.get('/swagger', (req, res) => {
    res.json(swagger);
 });

