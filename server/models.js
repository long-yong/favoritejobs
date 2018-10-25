// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var JobSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true,
    },
    type:{
        type:String,
        required: true,
    },
    description:{
        type:String,
    },
    skill1:{
        type:String,
    },
    skill2:{
        type:String,
    },
    skill3:{
        type:String,
    },
    likes:{
        type:Number,
        default:0,
    },
    
}, {timestamps:true});


module.exports = {
    Job:      mongoose.model('Job',      JobSchema),
}

