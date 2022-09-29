import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listofPost: Post[]=[
    new Post(
      'Title',
      'https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg',
      'Description',
      'Reilan author',
      new Date()
    ),
    new Post(
      'Title',
      'https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg',
      'Description',
      'Reilan author',
      new Date()
    )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
