import Task from '../models/taskModule.js'
export const createTask = async (req, res) => {
    try {
        const { description } = req.body;
        const userId = req.user._id;

        const taskObj = {
            description,
            createBy: userId
        };

        const task = await Task.create(taskObj);

        return res.status(201).json(task)
    } catch (err) {
        res.status(400).json({ message: "Failed to create the task " });
    }
};

export const updateTask =  async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;


        const task = await Task.findOneAndUpdate({ _id: taskId, createBy: userId }, req.body, {
            new: true,
            runValidator: true,
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        

        return res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ message: "Failed to update the task " });
    }
};

export const deleteTask =  async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;


        const task = await Task.findByIdAndDelete({ _id: taskId, createBy: userId }, req.body,);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        

        return res.status(200).json({message:"Task deleted successsfuly"});
    } catch (err) {
        res.status(400).json({ message: "Failed to deleted the task " });
    }
};

export const getTasksByUserId =  async (req, res) => {
    try {

        const userId = req.user._id;


        const tasks = await Task.find({createBy: userId }, req.body,);

        return res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ message: "Failed to find all tasks the task " });
    }
};


export const getAllTasks =  async (req, res) => {
    try {
        const tasks = await Task.find();

        return res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ message: "Failed to find all tasks the task " });
    }
};
export const getTask =  async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;


        const task = await Task.findOne({ _id: taskId, createBy: userId }, req.body,);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        return res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ message: "Failed to deleted the task " });
    }
};


