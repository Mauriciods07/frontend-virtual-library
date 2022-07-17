import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  title: string = '';
  author: string = '';
  year: number = 0;
  image: string = '';

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.author = this.author;
    item.year = this.year;
    item.image = this.image;

    this.itemService.addItem(item);
    /* this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    }); */
  }

}
