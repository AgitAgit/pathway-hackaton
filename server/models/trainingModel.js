const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  name:{
    
  }  
})

module.exports = mongoose.model("Training", trainingSchema);
