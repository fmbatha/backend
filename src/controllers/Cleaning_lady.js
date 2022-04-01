import CleaningTasks from "../models/CleaningTasks.js";
 
export const getAllCleaningTasks = async (req, res) => {
    try {
        const CleaningTasks_task = await CleaningTasks.findAll();
        res.json(CleaningTasks_task);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getCleaningTasksById = async (req, res) => {
    try {
        const CleaningTasks = await CleaningTasks.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(CleaningTasks[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createCleaningTasks = async (req, res) => {
    try {
        await CleaningTasks.create(req.body);
        res.json({
            "message": "CleaningTasks Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateCleaningTasks = async (req, res) => {
    try {
        await CleaningTasks.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "CleaningTasks Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteCleaningTasks = async (req, res) => {
    try {
        await CleaningTasks.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "CleaningTasks Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}