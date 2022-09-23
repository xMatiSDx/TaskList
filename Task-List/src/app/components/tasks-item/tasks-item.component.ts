import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Tasks = TASKS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
