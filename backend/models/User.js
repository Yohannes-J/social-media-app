import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  bio: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("User", userSchema);