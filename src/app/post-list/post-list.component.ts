import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listofPost: Post[]=[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.listofPost = this.postService.getPosts();
  }
}
