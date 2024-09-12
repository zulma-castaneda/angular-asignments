import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesWrapperComponent } from './directives-wrapper.component';

describe('DirectivesWrapperComponent', () => {
  let component: DirectivesWrapperComponent;
  let fixture: ComponentFixture<DirectivesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
