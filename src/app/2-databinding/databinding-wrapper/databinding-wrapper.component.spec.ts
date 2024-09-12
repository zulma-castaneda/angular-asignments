import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingWrapperComponent } from './databinding-wrapper.component';

describe('DatabindingWrapperComponent', () => {
  let component: DatabindingWrapperComponent;
  let fixture: ComponentFixture<DatabindingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabindingWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatabindingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
