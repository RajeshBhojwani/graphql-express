const mongoose  =   require('mongoose');
const Schema    =   mongoose.Schema;

const studentSchema   =   new Schema ( {

    name: String,
    dresscode: String,
    classid: String
});

module.exports  =   mongoose.model('Student', studentSchema);
