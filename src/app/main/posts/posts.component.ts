import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/Posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts

  constructor(private Http: PostsService) {

  }

  ngOnInit(): void {
    this.Http.getPosts().subscribe(data => this.posts = data)
  }

}
