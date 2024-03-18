
const mongoose = require('mongoose')

const BlogsSchema = new mongoose.Schema({

    title : {
        type: String,
        required:true
    },

    description: {
        type: String,
        required:true
    },
    image: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"assets"
    },
    content: {
        type: String
    },
    visibility: {
        type: String,
        enum: ['private', 'public'],
        default: 'private',
      },
    

},{timestamps:true})
module.exports = mongoose.model('blogs',BlogsSchema)