import { NgModule } from '@angular/core';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  exports: [NzRateModule, NzCarouselModule],
})
export class ZorroModule {}
