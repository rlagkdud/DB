const express = require("express");
const next = require("next");
const http = require("http");

const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Cho641164!",
    database: "Movie"
});

app.prepare().then(() => {

    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());

    //using get method
    server.get('/', (req, res) => {
        console.log("open index");
        return app.render(req, res, '/index', req.query);
    })

    server.post('/index', (req, res) => { 
        console.log("errortype: 2");
        console.log(req.data);
        const params = { name: "????" };
        res.send(params);
        return app.render(req, res, '/index', req.query);
    });

    server.get('/Mypage', (req, res) => {
        console.log("errortype: 3");
        return app.render(req, res, '/Mypage', req.query);
    });

    server.get("/Non_member", (req, res) => {
        console.log("into Mypage");
        const params = { name: "fuck!"};

        return app.render(req, res, "/Non_member", req.query);
    });

    //using post method

    server.post('/Login', async (req, res) => {
        console.log(req.body);
        var name = req.body.userID;
        var pw = req.body.userPW;
        
        var db_pwd;
        var query = "select * from user where userID= ?";
    
        var page = "/Login";
        var result_d;

        const connection = await pool.getConnection(async conn => conn);
        const [result] = await connection.query(query, [name]);

        result_d = result;

        if (result_d.length === 0) {
            console.log("haha reject1");
            connection.release();
            const params = { bool: false };
            res.send(params);
            app.render(req, res, page, {});
        } else {
            
            db_pwd = result[0].userPW;
            console.log("!" + db_pwd);

            if (db_pwd === pw) {
                console.log("hello admin");
                connection.release();
                const params = { bool: true, userID: req.body.userID };
                res.send(params);
                app.render(req, res, page);
            } else {
                console.log("haha reject2");
                connection.release();
                const params = { bool: false };
                page = '/Mypage';
                res.send(params);
                app.render(req, res, page);
            }
        }
    });

    server.all("*", (req, res) => {   
        return handle(req, res);
    });
    
    server.listen(9090, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:9090`);
      })
});
