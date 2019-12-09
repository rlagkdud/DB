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
    password: "111111",
    database: "movie"
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
        var query = "select user_pwd from customer where user_id= ?";
    
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
            
            db_pwd = result[0].user_pwd;
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
    
    server.post('/reservation', async (req, res) => {
        var c_region = req.body.region;
        var c_branch = req.body.branch;
        var c_movie = req.body.movie;
        
        var db_pwd;
        var query = "select start_time from movie where branch_id=? and title=?";
    
        var page = "/reservation";
        var result_d = [];

        const connection = await pool.getConnection(async conn => conn);
        const [result] = await connection.query(query, [c_branch, c_movie]);

        for (var i = 0; i < result.length; i++) {
            result_d.push(result[i].start_time)
        }
            
        console.log(result_d)
        if (result_d.length === 0) {
            console.log("haha reject1");
            connection.release();
            const params = { bool: false };
            res.send(params);
            app.render(req, res, page, {});
        } else {
            console.log("success!");
            connection.release();
            const params = { bool: true, times: result_d };
            res.send(params);
            app.render(req, res, page);
        }
    });

    server.post('/reservation_process', async (req, res) => {
        var c_time = req.body.time;
        var c_seat = req.body.seats;
        var c_branch = req.body.branch;
        var c_movie = req.body.movie;

        var query = "select movie_id from movie where title=? and start_time=? and branch_id=?";
    
        var page = "/seat_reserve";
        var result_id;

        const connection = await pool.getConnection(async conn => conn);
        const [result] = await connection.query(query, [c_movie, c_time, c_branch]);
        result_id = result;


        query = "select theater_id from movie where movie_id=?"
        const [thea] = await connection.query(query, [result_id[0].movie_id]);
        theater_num = thea[0].theater_id
        
        query = "update theater_seat set is_reserv=true where movie_id=? and seat_num=?"

        var success_is = [];
        for (var i=0; i < c_seat.length; i++) {
            success_is[i] = await connection.query(query, [result_id[0].movie_id, c_seat[i]]);
            console.log(success_is[i])
        }
        if (result_id.length === 0) {
            console.log("haha reject1");
            connection.release();
            const params = { bool: false };
            res.send(params);
            app.render(req, res, page, {});
        } else {
            console.log("success!");
            connection.release();
            const params = { bool: true, theater_num: theater_num, times: result_id };
            res.send(params);
            app.render(req, res, page);
        }
    });

    server.get('/PriceCheck', (req, res) => {
        console.log("errortype: 3");
        return app.render(req, res, '/PriceCheck', req.query);
    });

    server.all("*", (req, res) => {   
        return handle(req, res);
    });
    
    server.listen(9090, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:9090`);
      })
});
