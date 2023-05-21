const mongoose = require("mongoose");

const connectDB = async () => {
 // mongoose.connect("mongodb://localhost:27017/e-commerce");
 const query='mongodb+srv://root:root'
 + '@crudappreact.caclqzy.mongodb.net/nodecrudreactapi?'
 + 'retryWrites=true&w=majority';
 if( mongoose.connect(query))
 {
  console.log("connected sucessfully");
 }
 
};

connectDB();

 
