import http from 'http';
import dbInstance from './src/db/db.mjs';
import app from './src/app.mjs';



const server = http.createServer(app)



server.listen(9099, () => {
    dbInstance.then((response)=>{
        console.log("DB connected");
    }).catch((err)=>{
        console.log(err);
    })
})