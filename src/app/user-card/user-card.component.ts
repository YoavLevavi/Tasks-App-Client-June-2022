import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, zip } from 'rxjs';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  userServerURL: string = 'http://localhost:3000/api/users';

  @Input()
  user: any = {};

  isUndoneTasks: boolean = false;
  showOtherData: boolean = false;
  userClicked: boolean = false;

  deleteSub: Subscription = new Subscription();
  updateSub: Subscription = new Subscription();
  tasksSub: Subscription = new Subscription();
  activateRouteSub: Subscription = new Subscription();

  @Output()
  sendSelectedId: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  selectedUserId: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private taskService: TaskService
  ) {}

  clickedUser(): void {
    this.selectedUserId = this.user._id;
    this.sendSelectedId.emit(this.user._id);
    this.router.navigate(['/user/', this.user._id]);
  }

  updateUser(
    newName: string,
    newEmail: string,
    newzipCode: string,
    newStreet: string,
    newCity: string
  ): void {
    this.updateSub = this.userService
      .updateUser(this.userServerURL, this.user._id, {
        firstName: newName,
        email: newEmail,
        zipCode: newzipCode,
        street: newStreet,
        city: newCity,
      })
      .subscribe((data) => {
        console.log('Updated!');
      });
  }

  deleteUser(): void {
    let answer = prompt('Are you sure? (type <delete> to continue.)');
    if (answer == 'delete') {
      this.deleteSub = this.userService
        .deleteUser(this.userServerURL, this.user._id)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }

  setAllTasks(): void {
    this.tasksSub = this.taskService
      .getAllTasksByUserId('http://localhost:3000/api/tasks', this.user._id)
      .subscribe((tasks: any) => {
        tasks.forEach((task: any) => {
          console.log(task);
          if (task.completed == false) this.isUndoneTasks = true;
        });
      });
  }

  ngOnInit(): void {
    this.setAllTasks();
  }

  ngOnDestroy(): void {
    this.deleteSub.unsubscribe();
    this.updateSub.unsubscribe();
    this.activateRouteSub.unsubscribe();
    this.tasksSub.unsubscribe();
  }
}
