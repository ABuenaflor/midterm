import { getSafePropertyAccessString } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Post } from './post.model';

@Injectable({providedIn:'root'})
export class PostService {
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
  getPosts(){
    return this.listofPost;
  }
  deletePost(index:number){
    this.listofPost.splice(index,1)
  }
}