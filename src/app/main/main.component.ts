import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: any[] = [];
  presentedUsers: any[] = [];
  userSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.userSub = this.userService
      .getUsers('http://localhost:3000/api/users')
      .subscribe((users: any) => {
        this.users = users;
        this.presentedUsers = users;
      });
  }

  ngOnDestory(): void {
    this.userSub.unsubscribe();
  }
}
