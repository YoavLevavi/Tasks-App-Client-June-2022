import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  title: string = '';
  body: string = '';

  currentUserId: string = '';
  addPostSub: Subscription = new Subscription();
  currentUserIdSub: Subscription = new Subscription();

  constructor(
    private actRouter: ActivatedRoute,
    private postService: TaskService
  ) {}

  addPost(): void {
    this.addPostSub = this.postService
      .addTask('http://localhost:3000/api/posts', {
        userId: this.currentUserId,
        title: this.title,
        body: this.body,
      })
      .subscribe(() => {
        this.title = '';
        this.body = '';
      });
  }

  ngOnInit(): void {
    this.currentUserIdSub = this.actRouter.params.subscribe((params: any) => {
      this.currentUserId = params.id;
    });
  }
  ngOnDestory(): void {
    this.addPostSub.unsubscribe();
    this.currentUserIdSub.unsubscribe();
  }
}
