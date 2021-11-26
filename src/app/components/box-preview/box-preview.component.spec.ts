import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPreviewComponent } from './box-preview.component';

describe('BoxPreviewComponent', () => {
  let component: BoxPreviewComponent;
  let fixture: ComponentFixture<BoxPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
