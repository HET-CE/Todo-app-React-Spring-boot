package com.hetpatel.todo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hetpatel.todo.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}
