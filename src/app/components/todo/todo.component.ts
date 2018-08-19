import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})




export class TodoComponent implements OnInit {

  toDoListArray: any[];
  constructor(private ToDoservice:TodoService) { }

  ngOnInit() {
    this.ToDoservice.getToDoList().snapshotChanges()
    .subscribe(
      item=> {
        this.toDoListArray = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x['$key']= element.key;
          this.toDoListArray.push(x);
        })
        this.toDoListArray.sort((a,b) =>{
          return a.isChecked - b.isChecked;
        })
      }
    )
  }

  addItem(item){
  this.ToDoservice.addToDoList(item.value);
  item.value = null;
  }

  toggleChecked($key,isChecked){
    this.ToDoservice.checkOrUnCheck($key,!isChecked);
  }
  
  deleteToDo($key){
    this.ToDoservice.removeToDo($key);
  }
}
