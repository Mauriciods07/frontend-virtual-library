import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/items';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = 'http://localhost:3000/api/user';
  httpOptions = {
    'Content-Type': 'application:json'
  }
  items: Item[] = [
    {
      id: 1,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      year: 1997,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
      users: {
        id: 1,
        name: "mau",
        email: "mau@gmail.com",
        password: "1234",
        phone: 555,
        address: "una casa"
      }
    },
    {
      id: 2,
      title: 'Gran Gatsby',
      author: 'Fitzgerald Scott',
      year: 1980,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
      users: {
        id: 1,
        name: "mau",
        email: "mau@gmail.com",
        password: "1234",
        phone: 555,
        address: "una casa"
      }
    },
    {
      id: 3,
      title: 'Mecánica del corazón',
      author: 'Mathias Malzieu',
      year: 2010,
      image: 'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
      users: {
        id: 1,
        name: "mau",
        email: "mau@gmail.com",
        password: "1234",
        phone: 555,
        address: "una casa"
      }
    }
  ];

  constructor(private http:HttpClient) { }

  /* getItems():Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  } */

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.unshift(item);
    /* return this.http.post<Item>(this.url, item, this.httpOptions); */
  }

}
