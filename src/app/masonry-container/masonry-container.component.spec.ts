import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryContainerComponent } from './masonry-container.component';

describe('MasonryContainerComponent', () => {
  let component: MasonryContainerComponent;
  let fixture: ComponentFixture<MasonryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
