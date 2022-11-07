import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      // Para pintar por pantalla la respuesta cada vez que se ejecute
      // .pipe( 
      //     tap( (posts: any) => {
      //       console.log(posts)
      //   }) 
      // )
      .pipe( 
          tap( console.log ) 
      )
  }
}
