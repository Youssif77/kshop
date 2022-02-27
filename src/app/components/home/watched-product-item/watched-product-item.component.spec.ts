import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedProductItemComponent } from './watched-product-item.component';

describe('WatchedProductItemComponent', () => {
  let component: WatchedProductItemComponent;
  let fixture: ComponentFixture<WatchedProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchedProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
