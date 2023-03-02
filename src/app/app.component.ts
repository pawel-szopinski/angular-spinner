import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { LoadingService } from './loading.service';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts!: Post[];

  constructor(public loading: LoadingService, private http: HttpClient) {}

  ngOnInit(): void {
    const posts$: Observable<Post>[] = [];

    for (let id = 1; id <= 100; id++) {
      posts$.push(this.getPost(id));
    }

    forkJoin(posts$).subscribe(posts => {
      this.posts = posts;
    });
  }

  private getPost(id: number): Observable<Post> {
    // return this.http.get<Post>(
    //   `https://jsonplaceholder.typicode.com/posts/${id}`
    // );
    return this.http.get<Post>(
      `http://localhost:8080/post/${id}`
    );
  }
}
