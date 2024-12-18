const mongoose = require("mongoose");

//need to add post count or post ids to the user, followers and following.
const professionSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true
        },
        postIds:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
            required:false
            }
        ]
    }
);

module.exports = mongoose.model("Forum", professionSchema);
