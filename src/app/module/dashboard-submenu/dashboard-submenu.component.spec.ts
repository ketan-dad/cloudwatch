import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubmenuComponent } from './dashboard-submenu.component';

describe('DashboardSubmenuComponent', () => {
  let component: DashboardSubmenuComponent;
  let fixture: ComponentFixture<DashboardSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
