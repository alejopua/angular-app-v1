import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipeUpper',
})
export class MyPipeUpperPipe implements PipeTransform {
  transform(value: string | undefined): unknown {
    return value?.toLowerCase() || '';
  }
}
