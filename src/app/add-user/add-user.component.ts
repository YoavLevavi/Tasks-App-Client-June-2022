import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  name: string = '';
  email: string = '';

  addUserSub: Subscription = new Subscription();

  constructor(private taskService: UserService, private r: Router) {}

  addUser(): void {
    this.addUserSub = this.taskService
      .addUser('http://localhost:3000/api/users', {
        firstName: this.name,
        email: this.email,
      })
      .subscribe(() => {
        this.name = '';
        this.email = '';
        this.r.navigate(['']);
      });
  }

  ngOnInit(): void {}

  ngOnDestory(): void {
    this.addUserSub.unsubscribe();
  }
}
