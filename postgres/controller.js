const configuration =require('./config');


const getUsers=(req,res)=>{
    const id=req.params.id;
  configuration.query(`Select * from userDetails where id=${id}`,(err,results)=>{
    if(err){
    throw err;
    }
    res.json(results.rows);
    })
}

module.exports={
    getUsers
};
