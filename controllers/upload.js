
const path = require('path');
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

const Assets = require(path.resolve(DB_MODEL,'assets'))
/**
 * 
 * this Controllers are for storing the Asssets
 */
module.exports = {

  upload:async (req,res) =>{

    try {

          if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
          }
         await  dbconnect()
          const { originalname, buffer,mimetype } = req.file;
    
          let resource = await Assets.create({originalname:originalname,data:buffer,mimetype:mimetype})

          res.status(201).json({id:resource._id})
    

        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
  }


};
