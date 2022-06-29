import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorttable'
})
export class SorttablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log('sortBy', '-', args[0], args[1]);
    if(args[0] === 'name'){
      value.sort((a: any, b: any) => {
        if(a.name > b.name) return args[1];
        else if(a.name < b.name) return -args[1];
        else return 0;
      })
    }
    if(args[0] === 'price'){
      value.sort((a: any, b: any) => {
        if(a.price > b.price) return args[1];
        else if(a.price < b.price) return -args[1];
        else return 0;
      })
    }
    if(args[0] === ''){
      value.sort((a: any, b: any) => {
        if(a.id > b.id) return 1;
        else if(a.id < b.id) return -1;
        else return 0;
      })
    }
    return [...value];
  }

}
