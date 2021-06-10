import { Injectable } from '@angular/core';
import { Status, Task } from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  // Example of tasks
  tasks: Task[] = [{ title: "Open Title", description: "Open Description", date: new Date(), status: "Open" },
  { title: "Open Title1", description: "Open Description1", date: new Date(), status: "Open" }, { title: "Open in_progress", description: "Open in_progress", date: new Date(), status: "In-progress" },
  { title: "Open in_prgross1", description: "Open in_progress1", date: new Date(), status: "In-progress" }, { title: "Open Completed", description: "Open Completed", date: new Date(), status: "Completed" }];
  open: Task[] = [{ title: "Open Title", description: "Open Description", date: new Date(), status: "Open" },
  { title: "Open Title1", description: "Open Description1", date: new Date(), status: "Open" }];
  in_progress: any[] = [{ title: "Open in_progress", description: "Open in_progress", date: new Date(), status: "In-progress" },
  { title: "Open in_prgross1", description: "Open in_progress1", date: new Date(), status: "In-progress" }];
  complete: any[] = [{ title: "Open Completed", description: "Open Completed", date: new Date(), status: "Completed" }];


  constructor() {}

  // add task to tasks array
  addTask(task: Task) {
    this.tasks.push(task)

    if (task.status == Status.open) {
      this.open.push(task)
      console.log(this.open)
    } else if (task.status == Status.in_progress) {
      this.in_progress.push(task)
      console.log(this.in_progress)
    } else if (task.status == Status.completed) {
      this.complete.push(task)
      console.log(this.complete)
    }
  }

  // return all tasks from tasks array
  getAllTask() {
    return this.tasks
  }

  // change status of tasks after drag and drop
  changeStatus() {
    this.open.map((item, index) => {
      if (item.status != Status.open) {
        item.status = Status.open
        this.tasks.map((task, index) => {
          if(item.title === task.title){
            task.status = Status.open
          }
        })
      }
    })
    this.in_progress.map((item, index) => {
      if (item.status != Status.in_progress) {
        item.status = Status.in_progress
        this.tasks.map((task, index) => {
          if(item.title === task.title){
            task.status = Status.in_progress
          }
        })
      }
    })
    this.complete.map((item, index) => {
      if (item.status != Status.completed) {
        item.status = Status.completed
        this.tasks.map((task, index) => {
          if(item.title === task.title){
            task.status = Status.completed
          }
        })
      }
    })
  }
}
