import { NgModule } from '@angular/core';

import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  exports: [
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzDrawerModule,
    NzRateModule,
    NzCarouselModule,
    NzDropDownModule,
  ],
})
export class ZorroModule {}
