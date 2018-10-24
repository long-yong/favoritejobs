// controller.js

const { Job } = require('./models')

function errArr(err) {
    let arr = [];
    for(var key in err.errors) arr.push (err.errors[key].message);
    newarr = []; for(var i=arr.length-1; i>=0; i--) newarr.push(arr[i]);
    if(newarr.length==0) newarr.push('This name is existed, input a new name!');
    return newarr;
}

function all_obj(req,res,model) {
    model.find({})
    .then(data=>{ res.json({allObj:data}); });
}

function one_obj(req,res,model) {
    model.findById(req.params.id)
    .then(data=>{ res.json({oneObj:data}); });
}

function new_obj(req,res,model) {
     model.create(req.body)
    .then(data=>{ res.json({oneObj:data}); })
    .catch(err=>{ res.json({errArr:errArr(err)}); });
}

function del_obj(req,res,model) {
    model.findByIdAndDelete(req.params.id)
    .then(data=>{ model.find({}).then(data=>{
        res.json({allObj:data}); });
    });
}

function up_obj(req,res,model) {
    model.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true})
    .then(data=>{ res.json({oneObj:data}); })
    .catch(err=>{ res.json({errArr:errArr(err)}); })
}

module.exports = {

    //  job

    allJob:(req,res)=>{ all_obj(req,res,Job); },
    oneJob:(req,res)=>{ one_obj(req,res,Job); },
    newJob:(req,res)=>{ new_obj(req,res,Job); },
    delJob:(req,res)=>{ del_obj(req,res,Job); },
    upJob: (req,res)=>{ up_obj (req,res,Job); },
    allJobSorted:(req,res)=>{ Job.find({}).sort({'type':1}).then(data=>{res.json({allObj:data});})},

};


