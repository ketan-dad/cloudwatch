import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceSectionViewComponent } from './compliance-section-view.component';

describe('ComplianceSectionViewComponent', () => {
  let component: ComplianceSectionViewComponent;
  let fixture: ComponentFixture<ComplianceSectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceSectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceSectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
