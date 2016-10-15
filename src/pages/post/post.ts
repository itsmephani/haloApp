import {Http} from '@angular/http';
import {IPost} from '../../models/ipost';
import {Component} from '@angular/core';
import {NavigationService} from '../../services/navigation-service';
import {RestService} from '../../services/rest-service';


@Component({
  templateUrl: 'post.html',
  providers: [NavigationService, RestService]
})
export class Post {
  private loading: boolean = false;
  private post: IPost;
  public posts: Array<IPost>;
  public addNewPost: boolean = false;

  constructor(private http: Http, private navigationService: NavigationService,
      private restService: RestService) {
    this.http = http;
    this.initPost();
    this.restService.setUrl('posts');
    this.getPosts();
  }

  initPost() {
    this.post = {content: ''};
  }

  toggleAddNewPost() {
    this.addNewPost = !this.addNewPost;
    this.initPost();
  }

  getPosts() {
    this.loading = true;
    this.restService.all('posts', {}, {}).
      subscribe(response => {
        this.loading = false;
        this.posts = response.json()['data'];
      });
  }

  addPost() {
    this.restService.create('', {post: this.post}, {})
      .subscribe(response => {
        console.log(response);
        this.posts.push(response.json()['data']);
        this.initPost();
      });
  }

  like(post) {
    let like = {
      likeable_id: post.id,
      likeable_type: 'Post',
    }
    this.restService.create('likes', {like: like}, {})
      .subscribe(response => {
        post.likes.push(response.json()['data'])
      });

  }
}
