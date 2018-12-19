const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = 3010;
const app = express();


//database connection
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'BooksApp'
});

con.connect((error,result)=>{
    if(error){
        console.log('error:',error);
        throw error;
    }
    console.log('database connected...',result);
});

//middleware

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(`Access-Control-Allow-Methods`, `POST`);
    next();
});

app.use(bodyParser.json());

//routes
app.get('/home',(req,res)=>{
    res.send('welcome to express');
});

app.post('/register',(req,res)=>{
    console.log('in register');

    const {user} = req.body;
    console.log(user);
    let q = `insert into user1 values('${user.user_id}','${user.name}','${user.password}',${user.age})`;
    con.query(q,(err,result)=>{
        if(err){
            console.log('er',err);
            return res.status(400).send(err);
        }
        console.log('result:',result);
        res.status(200).send('success');
    });
});

app.get('/getUsres',(req,res)=>{
    console.log('djfhjh');
    let q = `select * from user1`;
    con.query(q,(err,result)=>{
        if(err){
            console.log('er',err);
            return res.status(400).send(err);
        }
        console.log('result', result);
        res.status(200).send(result);    });
});
app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
})