//Require in bcrypt for password hashing
const bcrypt = require ("bcryptjs");

//user model
module.exports = function(mongoose, DataTypes) {
    const User = mongoose.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        _id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true,

        },
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });
    return User;
};