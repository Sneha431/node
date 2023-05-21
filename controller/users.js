const uuid = require('uuid').v4;
const CircularJSON = require('circular-json');
const {parse, stringify} = require('flatted');
const { decycle, retrocycle } = require ("json-decycle");
// let users =[];
const User = require("../models/User");
const  getUsers = async (req,res)=>{
    const result = await User.find();
  
if(result)
{

    const users= JSON.stringify(result);
    // console.log(typeof(users));
   // res.send(users);
 res.render("userlist",{users:result});
}
}
const addUsers  = async (req,res)=>{
    res.render("addUser")
}

 const createUsers = async (req,res)=>{
   
 const isexist =  await User.find({$or:[{email:req.body.email},{contact:req.body.contact}]});
console.log(isexist);
if(Object.keys(isexist).length !== 0)
{
    res.send("User already exist");
}
else{
    const user = req.body;
            const users = ({...user,userid:uuid()});
            const userreq = new User(users);
            const result= await userreq.save();
            if(result){
               // res.send("User added");
               const result1 = await User.find();
               res.render("userlist",{users:result1});
            }
          
}

  

}

const findUser =  async (req,res)=>{



const result =  await User.find({userid:req.params.userid});
if(result)
{
    // res.send(result);
    res.render("editUser",{user:result})
}


}

const updateUser =  async (req,res)=>{


    const result =  await User.updateOne({userid:req.body.userid},{$set:req.body});
    if(result)
    {
        //res.send(result);
        const result1 = await User.find();
        res.render("userlist",{users:result1});
    }
    
    
    }
    const updateUsermany =  async (req,res)=>{


        const result =  await User.updateMany({active:false},{$set:req.body});
        if(result)
        {
            res.send(result);
        }
        
        
  }

//   const deleteUser =  async (req,res)=>{


//     const result =  await User.deleteOne({userid:req.body.userid});
//     if(result)
//     {
//         res.send(result);
//     }
    
    
// }
const deleteUser =  async (req,res)=>{


    const result =  await User.deleteOne({userid:req.params.userid});
  
    if(result)
    {
        const result1 = await User.find();
    res.render("userlist",{users:result1});
    }
    
    
}
const deleteUserMany =  async (req,res)=>{


    const result =  await User.deleteMany({active:true});
    if(result)
    {
        res.send(result);
    }
    
    
}

  



module.exports={getUsers,createUsers,findUser,updateUser,updateUsermany,deleteUser,deleteUserMany,addUsers}