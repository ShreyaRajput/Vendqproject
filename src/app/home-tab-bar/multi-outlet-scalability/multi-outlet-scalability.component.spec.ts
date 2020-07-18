import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiOutletScalabilityComponent } from './multi-outlet-scalability.component';

describe('MultiOutletScalabilityComponent', () => {
  let component: MultiOutletScalabilityComponent;
  let fixture: ComponentFixture<MultiOutletScalabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiOutletScalabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiOutletScalabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
