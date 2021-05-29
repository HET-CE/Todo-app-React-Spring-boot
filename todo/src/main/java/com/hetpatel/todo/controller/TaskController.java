package com.hetpatel.todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hetpatel.todo.entity.Task;
import com.hetpatel.todo.service.TaskService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TaskController {

	private TaskService taskService;
	
	public TaskController(TaskService theTaskService) {
		taskService = theTaskService;
	}
	
	@GetMapping("/todo")
	public List<Task> getTodos(){
		return taskService.findAll();
	}	
	
	@PostMapping("/todo")
	public void addTodo(@RequestBody Task task) {
		taskService.save(task);
		return;
	}
	
	@GetMapping("/todo/{id}")
	public Task getTodo(@PathVariable int id) {
		return taskService.findById(id);
	}
	
	@PutMapping("/todo/{id}")
	public void updateTodo(@PathVariable int id, @RequestBody Task taskDetails) {
		Task task = taskService.findById(id);
		
		task.setTask(taskDetails.getTask());
		task.setLastModified(taskDetails.getLastModified());
		task.setCreatedAt(taskDetails.getCreatedAt());
		task.setEndDate(taskDetails.getEndDate());
		
		taskService.save(task); 
	}
	
	@DeleteMapping("/todo/{id}")
	public void deleteTodo(@PathVariable int id) {
		taskService.deleteById(id);
	}
}
