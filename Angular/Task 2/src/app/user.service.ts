import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userPost } from './userPost';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserPost(): Observable<userPost[]>{
    return this.http.get<userPost[]>("http://jsonplaceholder.typicode.com/posts");
  }
}
