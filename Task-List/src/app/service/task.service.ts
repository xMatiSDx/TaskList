import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { Tasks } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiUrl)
  }

  deleteTask(task: Tasks):Observable<Tasks> {
    const url= `${this.apiUrl}/${task.id}`
    return this.http.delete<Tasks>(url)
  }
}
