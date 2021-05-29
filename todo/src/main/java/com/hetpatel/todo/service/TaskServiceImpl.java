package com.hetpatel.todo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hetpatel.todo.dao.TaskRepository;
import com.hetpatel.todo.entity.Task;

@Service
public class TaskServiceImpl implements TaskService {

	private TaskRepository taskRepository;
	
	public TaskServiceImpl(TaskRepository theTaskRepository) {
		taskRepository = theTaskRepository;
	}
	
	@Override
	public List<Task> findAll() {
		return  taskRepository.findAll();
	}

	@Override
	public void save(Task task) {
		taskRepository.save(task);
	}

	@Override
	public void deleteById(int theId) {
		taskRepository.deleteById(theId);
	}

	@Override
	public Task findById(int theId) {
		Optional<Task> result = taskRepository.findById(theId);
		
		Task theTask= null;
		
		if (result.isPresent()) {
			theTask = result.get();
		}
		else {
			// we didn't find the employee
			throw new RuntimeException("Did not find employee id - " + theId);
		}
		
		return theTask;
	}

	@Override
	public Task update(int id, Task task) {
		return taskRepository.save(task);
	}

}
