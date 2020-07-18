import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastCloudbasedPosComponent } from './fast-cloudbased-pos.component';

describe('FastCloudbasedPosComponent', () => {
  let component: FastCloudbasedPosComponent;
  let fixture: ComponentFixture<FastCloudbasedPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastCloudbasedPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastCloudbasedPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
