import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: number[], ...args: any[]): any {
    var res = value.sort((a, b) => {
      if(a > b) return args[0];
      else if(a < b) return -args[0];
      else return 0;
    })
    
    // if(args[0] == -1){
    //   arrNumber = value.reverse();
    // }
    return [...res];
  }

}
