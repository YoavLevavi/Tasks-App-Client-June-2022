import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(url: string) {
    return this.http.get(url);
  }

  getTaskById(url: string, id: string) {
    return this.http.get(url + '/' + id);
  }

  getAllTasksByUserId(url: string, id: string) {
    return this.http.get(url + '/alltasks/' + id);
  }

  addTask(url: string, task: any) {
    return this.http.post(url, task);
  }

  updateTask(url: string, id: string, task: any) {
    return this.http.put(url + '/' + id, task);
  }

  deleteTask(url: string, id: string) {
    return this.http.delete(url + '/' + id);
  }
}
