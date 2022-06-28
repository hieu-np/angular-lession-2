import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    if(args[0]){
      value = value.filter((x : any) => {
       
        // return x.id.toString().indexOf(args[0]) != -1;
        return JSON.stringify(x).toLowerCase().includes(args[0].toLowerCase());
      })
    }
    if(args[1]){
      value = value.filter((x : any) => {
       
        return x.name.toLowerCase().indexOf(args[1].toLowerCase()) != -1;
        // return JSON.stringify(x).toLowerCase().includes(args[1].toLowerCase());
      })
    }
    if(args[2] != 'all'){
      value = value.filter((x : any) => {
       
        return x.status.toString().indexOf(args[2].toLowerCase()) != -1;
        // return JSON.stringify(x).toLowerCase().includes(args[2].toLowerCase());
      })
    }else{
      return value
    }
    return value;
  }

}
