import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {
  transform(value: number): number[] {
    return (new Array(value)).fill(1);
  }
}
