import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any ) {
    if(value.length == 0 || filterString === ''){
      return value
    }
    
    let listVideos = [];
    if(isNaN(filterString)){
         listVideos = value.filter(data => data.programType == filterString);
    }
    else
    listVideos = value.filter(data => data.releaseYear == filterString);
    return listVideos;
  }

}
