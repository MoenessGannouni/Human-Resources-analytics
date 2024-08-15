// blog.component.ts
import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../../core/services/posts.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  postArray: any = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.loadData().subscribe(val => {
      this.postArray = val;
    }, error => {
      console.error('Error fetching data: ', error);
    });
  }

  // Include other methods such as onDelete, onFeatured, etc.
}
