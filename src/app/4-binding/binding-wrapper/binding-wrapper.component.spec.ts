import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingWrapperComponent } from './binding-wrapper.component';

describe('BindingWrapperComponent', () => {
  let component: BindingWrapperComponent;
  let fixture: ComponentFixture<BindingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BindingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
