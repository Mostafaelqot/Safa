import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(title, searchValue) {

    if (!title || !searchValue) {
      return title
    }

    
    return title.replaceAll(searchValue,`<span class="text-indigo-900 font-bold ">${searchValue}</span>`)


  }

}
