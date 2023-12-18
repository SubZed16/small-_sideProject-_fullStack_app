const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const AdminAccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: false,
    validate: [() => { }, "none valide mail extension"],
    maxLength: 255,
    unique: true
  },
  password: String,
  password_confirmation: {
    type: String,
    required: [true, "Please confirm your password !"],
    minlength: [8, "Password length must be at least 8 characters long"],
    validate: {
      validator: function (e) {
        return e === this.password;
      },
      message: "Passwords do not match ",
    },
    select: false,

  }
},
  { timestamps: true }
);
//statics
//function that verifies the admin password
AdminAccountSchema.statics.verifyPassword = async function (enteredPassword, hashedPassword) {
  try {
    return await bcrypt.compare(enteredPassword, hashedPassword);
  } catch (error) {
    throw new Error("Error occurred while verifying password");
  }
};

//hashing the admin password before saving in it to data-base
AdminAccountSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.password_confirmation = undefined;
  if (!this.isModified(this.password) || this.isNew) return next();
  this.password_change_date = Date.now();
});


const Admin = mongoose.model("Admin", AdminAccountSchema);
module.exports = Admin;