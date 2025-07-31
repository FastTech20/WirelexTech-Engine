import { CallbackError, model, Schema, SchemaTypes } from "mongoose";
import { IUser } from "../types/user";
import bcrypt from "bcrypt"

//UserSchema
const UserSchema = new Schema({
    firstName: {
        type: SchemaTypes.String,
    },
    lastName: {
        type: SchemaTypes.String,
    },
    email: {
        type: SchemaTypes.String,
        unique: true,
        required: true
    },
    password: {
        type: SchemaTypes.String,
        required: true,

    }
}, {
    timestamps: true,
})

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (err) {
        next(err as CallbackError);
    }
});

UserSchema.methods.comparePasswords = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

//Create model
const User = model<IUser>("User", UserSchema)
//Export Model
export default User;