import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  itemsFiltered
  transform(items, searchValue) {

    if (!items || !searchValue) {
      return items
    }
      this.itemsFiltered = items.filter(item => {
        return item.title.toUpperCase().includes(searchValue.toUpperCase())
      })
    
      return this.itemsFiltered
  }

}
