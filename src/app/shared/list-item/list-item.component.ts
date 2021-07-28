import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/Posts.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  postId
  post

  show =false
  constructor(private route: ActivatedRoute, private Http: PostsService, private router: Router) {
    this.postId = this.route.snapshot.params['id'];
    this.Http.getPost(this.postId).subscribe((data) => this.post = data)
  }

  ngOnInit(): void {
  }

  showUpdate() {
    this.show = ! this.show
  }

  update(postData: { title; body }) {
    this.Http.updatePost(this.postId, postData).subscribe(responseData => {
      console.log(responseData);
    });
    this.router.navigate(['/'])
  }
  delete() {
    this.Http.deletePost(this.postId).subscribe(responseData => {
      console.log(responseData)
    })
    this.router.navigate(['/'])
  }




}
