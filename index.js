import express from 'express';
import fetch from 'node-fetch';
const PORT = process.env.PORT || 80;
const user = {
    username: 'gossjsstudent2017',
    password: '|||123|||456'
}
const app = express();

app
    .all("/wordpress", async(req, res, next) => {
        const content = req.query.content;
        const response = await fetch('https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        const token = response.data.token;
        const data = {
            content:`${content}`, 
            title:"wfrsnk", 
            status:"publish"
        };
        const wpResponse = fetch('https://wordpress.kodaktor.ru/wp-json/wp/v2/posts', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        res.send(wpResponse.data.id + ''); 
    })

    .all("/login", (r) => r.res.send("wfrsnk"))

    .listen(PORT, ()=>{
        console.log('Server has been started...');
    });


    