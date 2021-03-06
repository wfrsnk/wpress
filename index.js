import express from 'express';
import axios from 'axios';

const PORT = process.env.PORT || 80;

const app = express();
app.get('/wordpress/', async (req, res, next) => { 
    const content = req.query.content; 
    const response = await axios.post( 
        'https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token', 
        { username: 'gossjsstudent2017', password: '|||123|||456' }, 
    ); 
    const token = response.data.token; 
    
    const wordpressResponse = await axios.post( 
        'https://wordpress.kodaktor.ru/wp-json/wp/v2/posts', 
        { content, title: 'wfrsnk', status: 'publish' }, 
        { 
            headers: { 
                Authorization: `Bearer ${token}`, 
            }, 
        }, 
    ); 
    
    res.send(wordpressResponse.data.id + ''); 
    })

    .all("/login", (r) => r.res.send("wfrsnk"))

    .listen(PORT, ()=>{
        console.log('Server has been started...');
    });



// import express from 'express';
// import fetch from 'node-fetch';

// const PORT = process.env.PORT || 80;
// const user = {
//     username: 'gossjsstudent2017',
//     password: '|||123|||456'
// }
// const app = express();

// app
//     .all("/wordpress", async(req, res, next) => {
//         const content = req.query.content;
//         const response = await fetch('https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token', {
//             method: 'GET',
//             headers: {
//                 'Content-Type':'application/json;charset=utf-8'
//             },
//             body: JSON.stringify(user)
//         });
//         const token = response.data.token;
//         const data = {
//             title:"wfrsnk", 
//             content:`${content}`, 
//             status:"publish"
//         };
//         const wpResponse = await fetch('https://wordpress.kodaktor.ru/wp-json/wp/v2/posts', {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(data)
//         }).then(res => res.json())

//         res.send(wpResponse.data.id + ''); 
//     })

//     .all("/login", (r) => r.res.send("wfrsnk"))

//     .listen(PORT, ()=>{
//         console.log('Server has been started...');
//     });


    