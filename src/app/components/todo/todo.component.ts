import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from "../../model/Todo";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos!:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos
    })
  }
  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
}
