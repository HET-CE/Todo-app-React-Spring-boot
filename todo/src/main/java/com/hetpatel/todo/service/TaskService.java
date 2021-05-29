package com.hetpatel.todo.service;

import java.util.List;

import com.hetpatel.todo.entity.Task;

public interface TaskService {

	public List<Task> findAll();
	
	public void save(Task task);
	
	public void deleteById(int theId);
	
	public Task findById(int thId);

	public Task update(int id, Task task);
}
