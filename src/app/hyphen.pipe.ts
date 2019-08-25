import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphen'
})
export class HyphenPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    return value.replace(/ /gi, "-");
  }

}
