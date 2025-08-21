import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email : {type : String, required : false},
    isOnline: { type: Boolean, default: false },
    role : {type : String , required : true}
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
