import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input()
  title: string = '';
  @Input()
  completed: boolean = false;

  @Input()
  taskId: number = 0;

  @Input()
  selectedUser: any = {};

  @Input()
  task_id: string = '';

  markCompleted(): void {
    this.taskService
      .updateTask('http://localhost:3000/api/tasks', this.task_id, {
        title: this.title,
        completed: true,
      })
      .subscribe();
  }

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
}
