

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




/**
 * Service Schema
 */
var ServiceproposerSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: '_id'
    },
    createdAt :{type : Date , default : Date.now },
    updatedAt :{type : Date , default : Date.now }
});

ServiceproposerSchema.statics = {
    load: function(id,cb){
        this.findOne({_id : id}).exec(cb);
    }}


mongoose.model('Serviceproposer', ServiceproposerSchema);