import mongoose from "mongoose";
import UserSchema from "../schemas/user.scheme";

export const User = mongoose.model("User", UserSchema);