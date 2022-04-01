import _ from 'lodash';
import { Router } from 'express';
import { baseURL } from '../config';
import uploadMiddleware from '../middlewares/uploaderMiddleware';
const {Images} = require("../models");

const router = Router();

/**
 * @DESC Route to upload single file
 * @END-PT 'api/images/single-upload'
 * @Access Public
 * @TYPE POST
 */
router.post('/single-upload', uploadMiddleware.single('file'), async (req, res) => {
    let imagePath = req.file.path.replace("public", baseURL);
    imagePath = imagePath.split('src')[1].substring(1, imagePath.length);

    console.log("THE IMAGE PATH IS "+imagePath);

    console.log("THE IMAGE NAME IS "+req.file.filename);


    return res.json({
        imagePath
    });
});

/**
 * @DESC Route to upload multiple file
 * @END-PT 'api/images/multi-upload'
 * @Access Public
 * @TYPE POST
 */
 router.post('/multi-upload', uploadMiddleware.array('files'), async(req, res) => {



    var serial=123;
    var message="hdchhfhhsb";
    var serial =+1;
    var cover_photo=0;

 

    let { files } = req;
    // let propertyID=req;
    let resp = [];
    _.forEach(files, (file) => {
        let imagePath = file.path.replace("public", baseURL);
        imagePath = imagePath.split('src')[1].substring(1, imagePath.length);
        resp.push(imagePath);

   
        Images.create({
            photo: file.filename,
            message: message,
            cover_photo: cover_photo,
            serial: serial,
            PropertyId:req.body.PropertyId
        }).then((image) => {
            try{
               	

                console.log('File uploaded successfully');

                console.log(image);
                
               
            }catch(e){
                console.log(e);
               // res.json({'err': e});
            }
        });

    });
    return res.json(resp);
});


export default router;