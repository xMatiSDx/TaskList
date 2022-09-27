import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import {Subscription} from 'rxjs'
import { Tasks } from 'src/app/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Tasks> = new EventEmitter;
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false
  subscription?: Subscription;

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert("Please add a Task!");
      return
    }
    const {text,day,reminder} = this
    const newTask = {text,day,reminder}

    this.onAddTask.emit(newTask);
  }

}
