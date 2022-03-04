import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splice'
})
export class SplicePipe implements PipeTransform {
  transform(value: any[], curr: number, range: number): any[] {
    if (!value?.length) {
      return [];
    }
    const ref = JSON.parse(JSON.stringify(value));
    const {start, end} = this.calculateStartAndEnd(ref.length, curr, range);
    return ref.splice(start, end);
  }

  calculateStartAndEnd(total: number, curr: number, range: number): {start: number, end: number} {
    let startPage;
    let endPage;
    if (total <= range) {
      // total pages less than max so show all pages
      startPage = 0;
      endPage = total;
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(range / 2);
      let maxPagesAfterCurrentPage = Math.ceil(range / 2) - (curr - (range / 2));
      if (curr <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 0;
        endPage = range;
      } else if (curr + maxPagesAfterCurrentPage >= total) {
        // current page near the end
        startPage = total - range + 1;
        endPage = total;
      } else {
        // current page somewhere in the middle
        startPage = curr - maxPagesBeforeCurrentPage;
        endPage = curr + maxPagesAfterCurrentPage;
      }
    }
    return {start: startPage, end: endPage};
  }
}
