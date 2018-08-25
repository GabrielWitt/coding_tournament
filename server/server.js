// Set up
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
 
// Configuration
mongoose.connect('mongodb://localhost/coding_tournament');
 
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
 
// Models
var Alert = mongoose.model('Alert', {
    alert_type: String,
    description: String,
    gps_location: String,
    alert_date: Date,
    uploadDate: Date
})

/*
 * Generate some test data, if no records exist already
 * MAKE SURE TO REMOVE THIS IN PROD ENVIRONMENT
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Alert.remove({}, function(res){
    console.log("removed records");
});

Alert.count({}, function(err, count){
    console.log("Alerts: " + count);

    if(count === 0){

        var recordsToGenerate = 150;

        var alertTypes = [
            'Asalto',
            'Robo', 
            'Pelea', 
            'Borrachera', 
            'Venta de Drogas', 
            'Asesinato Balacera', 
            'Vandalismo',
            'Manifestación Violenta',
            'Abuso policial',
            'Abuso Infantil',
            'Violencia Escolar', 
            'Atropellamiento',
            'Persona Sospechosa',
            'Posible Ladrón',
            'Prostitución',
            'Violencia Domestica', 
            'Posible Terrorismo',
            'Pandillas Molestando',
            'Soborno a Policías',
            'Secuestro Express',
            'Otro'            
        ];

        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        // For testing purposes, all rooms will be booked out from:
        // 18th May 2017 to 25th May 2017, and
        // 29th Jan 2018 to 31 Jan 2018

        for(var i = 0; i < recordsToGenerate; i++){
            var newdate = "20"+getRandomInt(15, 18) + "-" + months[getRandomInt(0,11)] + "-" + getRandomInt(1, 28);
            var newAlert = new Alert({
                alert_type: alertTypes[getRandomInt(0,20)],
                description: alertTypes[getRandomInt(0,20)],
                gps_location: "-0."+getRandomInt(11,40)+getRandomInt(0,100)+",-78"+getRandomInt(39,52)+getRandomInt(0,100),
                alert_date: newdate,
                uploadDate: newdate
            });

            newAlert.save(function(err, doc){
                console.log("Created test document: " + doc._id);
            });
        } 
        
    }
});
 
// Routes
    app.get('/api/alerts',function(req,res){
        return Alert.find(function (err, alerts){
            if (!err) {
                res.json(alerts)
            }else{
                res.send(err);
            }
        })
    })
 
// listen
app.listen(8080);
console.log("App listening on port 8080");