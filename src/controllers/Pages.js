import Pages from "../models/Pages.js";
 
export const getAllPagess = async (req, res) => {
    try {
        const pages = await Pages.findAll();
        res.json(pages);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getPagesById = async (req, res) => {
    try {
        const Pages = await Pages.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(Pages[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createPages = async (req, res) => {
    try {
        await Pages.create(req.body);
        res.json({
            "message": "Pages Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePages = async (req, res) => {
    try {
        await Pages.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pages Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePages = async (req, res) => {
    try {
        await Pages.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pages Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}