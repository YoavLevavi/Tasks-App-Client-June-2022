import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-cards',
  templateUrl: './posts-cards.component.html',
  styleUrls: ['./posts-cards.component.css'],
})
export class PostsCardsComponent implements OnInit {
  @Input()
  selectedUser: any = {};
  selectedUserPosts: any[] = [];
  
  isAddPostMode: boolean = false;

  postSub: Subscription = new Subscription();
  routeSub: Subscription = new Subscription();

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((allParams: any) => {
      this.setUserPosts(allParams.id);
    });
  }

  setUserPosts(id: string): void {
    this.postSub = this.postService
      .getAllPostsByUserId('http://localhost:3000/api/posts', id)
      .subscribe((posts: any) => {
        this.selectedUserPosts = posts;
        console.log(this.selectedUserPosts);
      });
  }
}
