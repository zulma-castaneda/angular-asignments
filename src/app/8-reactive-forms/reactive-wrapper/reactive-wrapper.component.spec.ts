import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveWrapperComponent } from './reactive-wrapper.component';

describe('ReactiveWrapperComponent', () => {
  let component: ReactiveWrapperComponent;
  let fixture: ComponentFixture<ReactiveWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
