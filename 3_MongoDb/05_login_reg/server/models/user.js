var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var bcrypt = require('bcrypt-nodejs-as-promised');
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
    },
    salt: {
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

UserSchema.methods.createPwHash = function(password) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return console.error(err);
        }
        console.log("SALT WAS SET ---");
        this.salt = salt;
        var saltedPw = password + salt;
        console.log(saltedPw);
        bcrypt.hash(password, 10)
            .then( hash => {
                this.passwordHash = hash;
                console.log(hash);
                console.log("HASHED PW");
                console.log(this.passwordHash);
        });
            // .then( function(hash) {
            //     console.log("INSIDE HASH");
            //     console.log(hash);
            //     this.passwordHash = hash;
            // })
            // .catch( function(err) {
            //     console.error(err);
            // })
        // bcrypt.hash(saltedPw, 10, function(err, hash) {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     console.log("INSIDE HASH");
        //     console.log(hash);
        //     this.passwordHash = hash;
        // })
    })
}

UserSchema.path('passwordHash').validate(function(value) {
    if (this._password || this._password_confirm) {
        if (!this._password) {
            this.invalidate('password', "Password is required.");
        }
        if (!val.check(this._password).min(8)) {
            this.invalidate('password', "Must be at least 8 characters.");
        }
        if (this._password !== this._password_confirm) {
            console.log("LOGGING PASSWORD MISMATCH")
            this.invalidate('password', "The password and confirmation do not match.");
        }
    }
}, null);

UserSchema.pre('save', function(done) {
    console.log("INSIDE pre method");
    console.log("GETTING THE VIRTUAL PASSWORD");
    console.log(this._password);
    this.createPwHash(this._password);
    console.log("AFTER THE PASSWORD HASH METHOD");
    console.log(this.passwordHash);
    done();
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
