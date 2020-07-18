import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabBarComponent } from './home-tab-bar.component';

describe('HomeTabBarComponent', () => {
  let component: HomeTabBarComponent;
  let fixture: ComponentFixture<HomeTabBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTabBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
