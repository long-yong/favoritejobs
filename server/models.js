// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: [true, 'First Name is required.' ],
        minlength: 2,
    },
    lastName:{
        type:String,
        required: [true, 'Last Name is required.' ],
        minlength: 2,
    },
    email:{
        type:String,
        required: [true, 'Email is required.' ],
        unique: true,
        minlength: 6,
    },
    password:{
        type:String,
        required: [true, 'Password is required.' ],
        minlength: 6,
    },
}, {timestamps:true});


var JobSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    stars:{
        type:String,
    },    
    company:{
        type:String,
    },
    companyUrl:{
        type:String,
    },
    agent:{
        type:String,
    },
    agentUrl:{
        type:String,
    },
    supplier:{
        type:String,
    },
    supplierUrl:{
        type:String,
    },
    industry:{
        type:String,
    },
    location:{
        type:String,
    },
    salary:{
        type:String,
    },
    title:{
        type:String,
    },
    jobId:{
        type:String,
    },
    applyDate:{
        type:String,
    },
    status:{
        type:String,
    },    
    appoints:{
        type:String,
    },
    contact:{
        type:String,
    },
    others:{
        type:String,
    },    

    jobPost:{
        type:String,
        required: [true, 'Job Post is required.' ],
    },
    info:{
        type:String,
    },
    resume:{
        type:String,
    },
    
}, {timestamps:true});


module.exports = {
    User:     mongoose.model('User',     UserSchema),
    Job:      mongoose.model('Job',      JobSchema),    
}

