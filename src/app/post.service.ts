import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts(url: string) {
    return this.http.get(url);
  }

  getPostById(url: string, id: string) {
    return this.http.get(url + '/' + id);
  }

  getAllPostsByUserId(url: string, id: string) {
    return this.http.get(url + '/allposts/' + id);
  }

  addPost(url: string, user: any) {
    return this.http.post(url, user);
  }

  updatePost(url: string, id: string, user: any) {
    return this.http.put(url + '/' + id, user);
  }

  deletePost(url: string, id: string) {
    return this.http.delete(url + '/' + id);
  }
}
