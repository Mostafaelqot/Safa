import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private Http: HttpClient) { }

    getPosts() {
        return this.Http.get(`https://jsonplaceholder.typicode.com/posts`)
    }
    getPost(id) {
        return this.Http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }

    updatePost(id, postData) {
        return this.Http.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, postData)
    }

    deletePost(id) {
        return this.Http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }


}