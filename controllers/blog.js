
const path = require('path');
const Blog = require(path.resolve(DB_MODEL, 'blogs'));
const Assets = require(path.resolve(DB_MODEL, 'assets'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));


module.exports = {


    'create': async (req, res) => {


        try {

            await dbconnect()

            const { title, imageId, description, content, visibility } = req.body;

            let resource = await Blog.create({ title: title, image: imageId, description:description,content: content, visibility: visibility })

            res.status(201).json({ id: resource._id })

        }
        catch (err) {
            console.log(`Error occured while creting a blog ${err}`)
            res.status(500).json({ message: 'internal server error' })
        }
    },
    'search': async (req, res) => {


        try {

            await dbconnect()

           let blogs = await  Blog.find({}).populate('image');

         
           res.status(200).json({length:blogs.length,blogs:blogs})
        }
        catch (err) {

            res.status(500).json({ message: 'internal server error' + err })
        }
    },
    "find": async (req,res) =>{
        const ID = req.params.id
        try {

            await dbconnect()

           let blog= await  Blog.findById(ID).populate('image');

         
           res.status(200).json({blog:blog})
        }
        catch (err) {

            res.status(500).json({ message: 'internal server error' + err })
        }
    },

    update: async (req,res) =>{
        const ID = req.params.id
        try {

            await dbconnect()

           let blog= await  Blog.findByIdAndUpdate(ID,req.body)

         
           res.status(201).json({message: "successfully updated"})
        }
        catch (err) {

            res.status(500).json({ message: 'internal server error' + err })
        }

    }
}