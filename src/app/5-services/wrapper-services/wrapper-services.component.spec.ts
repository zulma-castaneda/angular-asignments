import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperServicesComponent } from './wrapper-services.component';

describe('WrapperServicesComponent', () => {
  let component: WrapperServicesComponent;
  let fixture: ComponentFixture<WrapperServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrapperServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
