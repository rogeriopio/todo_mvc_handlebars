import Task from '../models/Task.js';

export class TaskController {
	constructor() {}
	//sem precisar instanciar os metodos usa estatico
	static createTask(req, res) {
		res.render('tasks/create');
	}
	static async createTaskSave(req, res) {
		const task = {
			title: req.body.title,
			description: req.body.description,
			done: false,
		};
		await Task.create(task);
		res.redirect('/tasks');
	}

	static async showTasks(req, res) {
		const tasks = await Task.findAll({ raw: true });

		res.render('tasks/all', { tasks });
	}
}
