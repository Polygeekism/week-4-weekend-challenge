var pool = require("../modules/pool.js")
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log('made it to the get route');
    pool.connect(function (errorConnecting, client, done) {
        if (errorConnecting) {
            console.log('error connecting', errorConnecting);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM employees', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('error making query', errorMakingQuery);
                    res.sendStatus(500);
                }
                else {
                    console.log('successful get route');
                    res.send(result.rows);

                }
            })
        }


    })
})
router.get('/salaries', function (req, res) {
    console.log('made it to the salary route');
    pool.connect(function (errorConnecting, client, done) {
        if (errorConnecting) {
            console.log('error connecting', errorConnecting);
            res.sendStatus(500);
        } else {
            client.query('SELECT SUM(salary) FROM employees WHERE is_active=true', function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('error making query', errorMakingQuery);
                    res.sendStatus(500);
                }
                else {
                    console.log('successful salary route');
                    res.send(result.rows);

                }
            })
        }


    })
})


router.post('/', function (req, res) {
    console.log('made it to the post route');
    pool.connect(function (errorConnecting, client, done) {
        if (errorConnecting) {
            console.log('error connecting', errorConnecting);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO employees (first_name, last_name, job_title, salary)VALUES ($1, $2, $3, $4)',[req.body.first_name, req.body.last_name, req.body.job_title, req.body.salary],function (errorMakingQuery, result){
                done();
                if (errorMakingQuery) {
                    console.log('error making query', errorMakingQuery)
                    res.sendStatus(500);

                }else{
                    res.sendStatus(200);
                }
            })
        }
    })
});

// router.delete('/:id', function(req, res){
//     var id = req.params.id;
//     pool.connect(function (errorConnecting, client, done){
//         if(errorConnecting){
//             console.log('error connecting', errorConnecting);
//             res.sendStatus(500);
//         }else{
//             client.query('DELETE FROM employees WHERE id = $1;',[id], function (errorMakingQuery, result){
//                 done();
//                 if(errorMakingQuery){
//                     console.log('error making query', errorMakingQuery);
//                     res.sendStatus(500);
//                 }else{
//                     res.sendStatus(200);
//                 }
//             })
//         }
//     })
// })

router.put('/', function(req, res){
    pool.connect(function (errorConnecting, client, done){
        if(errorConnecting){
            console.log('error connecting', errorConnecting);
            res.sendStatus(500);
        }else{
            client.query('UPDATE employees SET is_active = $2 WHERE id = $1',[req.body.id, req.body.active], function (errorMakingQuery, result){
                done();
                if(errorMakingQuery){
                    console.log('error making query', errorMakingQuery);
                    res.sendStatus(500);
                }else{
                    res.sendStatus(200);
                }
            })
        }
    })
})

module.exports = router;