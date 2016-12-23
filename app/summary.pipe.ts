import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number = 50) {
    console.log(value, limit);
    if (value) {
      return value.substring(0, limit) + '...';
    }
  }
}