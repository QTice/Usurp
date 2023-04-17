const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
        first_name: {
            type: String,
            required: [true, "First Name is required."],
            minlength: [1, "Need at least one character."],
            maxlength: [45, "Limit your name to 45 characters please."]
        },
        last_name: {
             type: String,
            required: [true, "First Name is required."],
            minlength: [3, "Last name must be more than three characters."],
            maxlength: [45, "You are allowed not more than 45 characters for your last name."]
        },
        email: {
            type: String, 
            required:[true, "Please Provide Email."]
        },
        
        time_off: {
            type: Number,
            default: 10
        },
        sick_time_off: {
            type: Number,
            default: 5
        },
        employee_start_date: {
            type: Number,
        }
        
    }, { timestamps: true })

    const Test = mongoose.model("Test", testSchema);
    
    module.exports = Test;
