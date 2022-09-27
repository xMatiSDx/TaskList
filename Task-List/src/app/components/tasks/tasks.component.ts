import { Component, OnInit } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';
import { TaskService } from 'src/app/service/task.service';
import { Tasks } from 'src/app/tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks = tasks
    ));
  }

  deleteTask(task: Tasks) {
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ))
  }
  toggleReminder(task: Tasks) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Tasks) {
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)))
  }
}
