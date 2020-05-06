const mongoose  =   require('mongoose');
const Schema    =   mongoose.Schema;

const classSchema   =   new Schema ( {

    grade: String,
    sections: String 
});

module.exports  =   mongoose.model('Class', classSchema);
