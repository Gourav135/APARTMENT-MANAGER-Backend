const mongoose = require("mongoose");


async function connectToDB(){
    try{
        await mongoose.connect(process.env.DBURL);
        console.log("connected to db!");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectToDB;