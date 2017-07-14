import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'category' })
export class CategoryFilterPipe implements PipeTransform {
  transform(value: any[], category: string): any {
    return value.filter(value => {
        return !category || value.category === category;
    });
  }
}