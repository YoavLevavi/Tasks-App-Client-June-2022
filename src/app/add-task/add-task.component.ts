import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  title: string = '';

  currentUserId: string = '';
  addTaskSub: Subscription = new Subscription();
  currentUserIdSub: Subscription = new Subscription();

  constructor(
    private actRouter: ActivatedRoute,
    private taskService: TaskService
  ) {}

  addTask(): void {
    this.addTaskSub = this.taskService
      .addTask('http://localhost:3000/api/tasks', {
        userId: this.currentUserId,
        title: this.title,
        completed: false,
      })
      .subscribe(() => {
        this.title = '';
      });
  }

  ngOnInit(): void {
    this.currentUserIdSub = this.actRouter.params.subscribe((params: any) => {
      this.currentUserId = params.id;
    });
  }
  ngOnDestory(): void {
    this.addTaskSub.unsubscribe();
    this.currentUserIdSub.unsubscribe();
  }
}
