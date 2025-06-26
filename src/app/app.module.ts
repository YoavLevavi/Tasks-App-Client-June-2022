import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';
import { TodosCardsComponent } from './todos-cards/todos-cards.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { PostsCardsComponent } from './posts-cards/posts-cards.component';
import { PostCardComponent } from './post-card/post-card.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddUserComponent } from './add-user/add-user.component';
import { OtherDataComponent } from './other-data/other-data.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'user/:id', component: ExtraInfoComponent },
      { path: 'adduser', component: AddUserComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersCardsComponent,
    UserCardComponent,
    ExtraInfoComponent,
    TodosCardsComponent,
    TodoCardComponent,
    PostsCardsComponent,
    PostCardComponent,
    AddPostComponent,
    AddTaskComponent,
    AddUserComponent,
    OtherDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
