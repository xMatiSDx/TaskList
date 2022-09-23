import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Tasks[] = TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
