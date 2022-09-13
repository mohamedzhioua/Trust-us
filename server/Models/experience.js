const mongoose = require("mongoose");
const expSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category:{type:String, require:true},
  location:{type:String,require:true},
  description:String,
  rate:Number,

}, {timestamps: true} );
module.exports=mongoose.model("Experience",expSchema)