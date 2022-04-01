import multer from 'multer';
let fs = require('fs-extra');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {



    //    let Id = req.body.propertyID;
       let propertyID=req.body.PropertyId;
       let path = `${__dirname}/../public/uploads/${propertyID}`;
       fs.mkdirsSync(path);
       cb(null, path);

       console.log("THE PROPERTY ID IS "+propertyID);

    },
    filename: (req, file, cb) => {
        let lastIndex = file.originalname.lastIndexOf(".");
        // get the original extension of the file
        let extension = file.originalname.substring(lastIndex);
        // Create the file on the server
        cb(null, `img-${Date.now()}${extension}`);
    }
});

const upload = multer({ storage });

export default upload;
