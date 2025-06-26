import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.css'],
})
export class UsersCardsComponent implements OnInit {
  @Input()
  users: any[] = [];

  @Input()
  presentedUsers: any[] = [];

  selectedUserId: string = '';

  constructor(private r: Router) {}

  addUser(): void {
    this.r.navigate(['/adduser']);
  }

  setPresentedUsersByNameOrEmail(searchText: string): void {
    this.presentedUsers = this.users.filter((user) => {
      return (
        user.firstName.includes(searchText) || user.email.includes(searchText)
      );
    });
  }

  ngOnInit(): void {}
}
