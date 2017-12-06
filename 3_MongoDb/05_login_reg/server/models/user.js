var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        unique: [true, "This email address is already in use."], 
        lowercase: true, 
        trim: true,
        validate: {
            validator: function( value ) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
            },
            message: "Email is not in proper format."
        },
        alias: "Email"
    },
    first_name: { 
        type: String, 
        required: true, 
        trim: true, 
        minlength: 2,
        alias: "First Name"
    },
    last_name: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: 2,
        alias: "Last Name" 
    },
    birthdate: { 
        type: Date, 
        required: true, 
        alias: "Birthdate"
    },
    passwordHash: {
        type: String
    }
}, {timestamps: true});

UserSchema.virtual('password')
    .get(function() {
        return this._password;
    })
    .set(function(value) {
        this._password = value;
    })
UserSchema.virtual('password_confirm')
    .get(function() {
        return this._password_confirm;
    })
    .set(function(value) {
        this._password_confirm = value;
    })

// MOVED THE PASSWORD VALIDATION TO THE SERVER CONTROLLER
// UserSchema.path('passwordHash').validate(function(value) {
//     if (this._password || this._password_confirm) {
//         if (!this._password) {
//             this.invalidate('password', "Password is required.");
//         }
//         if (!val.check(this._password).min(8)) {
//             this.invalidate('password', "Must be at least 8 characters.");
//         }
//         if (this._password !== this._password_confirm) {
//             console.log("LOGGING PASSWORD MISMATCH")
//             this.invalidate('password', "The password and confirmation do not match.");
//         }
//     }
// }, null);

UserSchema.pre('save', function(done) {
    const saltRounds = 10;
    bcrypt.hash(this._password, saltRounds)
        .then( hash => {
            this.passwordHash = hash;
            done();
        });
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
