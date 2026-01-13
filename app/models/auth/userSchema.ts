import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
  role:string
  comparePassword?: (candidatePassword: string) => Promise<boolean>
}


const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["user", "admin"], default: "user" },
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", UserSchema)
export default User;


UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password)
}

