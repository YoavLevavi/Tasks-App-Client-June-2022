import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todos-cards',
  templateUrl: './todos-cards.component.html',
  styleUrls: ['./todos-cards.component.css'],
})
export class TodosCardsComponent implements OnInit {
  @Input()
  selectedUser: any = {};

  selectedUserTasks: any[] = [];

  isAddTaskMode: boolean = false;

  taskSub: Subscription = new Subscription();
  routeSub: Subscription = new Subscription();
  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((allParams: any) => {
      this.setUserTasks(allParams.id);
    });
  }

  setUserTasks(id: string): void {
    this.taskSub = this.taskService
      .getAllTasksByUserId('http://localhost:3000/api/tasks', id)
      .subscribe((tasks: any) => {
        this.selectedUserTasks = tasks;
      });
  }

  ngOnDestroy(): void {
    this.taskSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}
