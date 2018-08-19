import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(){
    this.toDoList = this.firebasedb.list('Titles');
    return this.toDoList;
  }

  addToDoList(Title: string){
    this.toDoList.push(
      {
        Title:Title,
        isChecked: false
      }
    );
  }

  checkOrUnCheck($key:string, bool:boolean){
    this.toDoList.update($key,
      {isChecked: bool}
    );
  }

  removeToDo($key:string){
    this.toDoList.remove($key);
  }

}
