const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientScheduleSchema = new Schema({
    PatientName: {type: String, require: true},
    Address: {type: String, require: true},
    PhoneNumber: {type: Number, require: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Patient_Schedule", PatientScheduleSchema);