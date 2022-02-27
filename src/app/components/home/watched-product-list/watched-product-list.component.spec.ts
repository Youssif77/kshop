import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedProductListComponent } from './watched-product-list.component';

describe('WatchedProductListComponent', () => {
  let component: WatchedProductListComponent;
  let fixture: ComponentFixture<WatchedProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchedProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
