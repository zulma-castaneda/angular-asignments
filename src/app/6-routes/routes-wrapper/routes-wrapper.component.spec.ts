import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesWrapperComponent } from './routes-wrapper.component';

describe('RoutesWrapperComponent', () => {
  let component: RoutesWrapperComponent;
  let fixture: ComponentFixture<RoutesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutesWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
