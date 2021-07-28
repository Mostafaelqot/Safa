import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {
  @Input() items

  searchValue
  filteredItems

  constructor(private route: Router) {
  }

  ngOnChanges() {
    this.filteredItems = this.items
  }

  search() {
    setTimeout(() => {
      this.filteredItems = this.items.filter(item => {
        return item.title.toUpperCase().includes(this.searchValue.toUpperCase())
      })
    }, 500);
  }
  
  postDetailes(id) {
    this.route.navigate(['/list-item', id])
  }


}
