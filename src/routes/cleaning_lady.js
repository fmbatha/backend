import express from "express";

import { getAllCleaningTasks,createCleaningTasks,getCleaningTasksById,updateCleaningTasks,deleteCleaningTasks} from "../controllers/Cleaning_lady.js";


const router = express.Router();
 

router.get('/', getAllCleaningTasks);
router.get('/:id', getCleaningTasksById);
router.post('/', createCleaningTasks);
router.patch('/:id', updateCleaningTasks);
router.delete('/:id', deleteCleaningTasks);
 
export default router;