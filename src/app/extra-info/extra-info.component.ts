import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css'],
})
export class ExtraInfoComponent implements OnInit {
  selectedUser: any = {};

  selectedUserId: string = '';

  routeSub: Subscription = new Subscription();
  getUserSub: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  setSelectedUser(): void {
    this.userService
      .getUserById('http://localhost:3000/api/users', this.selectedUserId)
      .subscribe((user) => {
        this.selectedUser = user;
      });
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((allParams: any) => {
      this.selectedUserId = allParams.id;
      this.setSelectedUser();
    });
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.getUserSub.unsubscribe();
  }
}
