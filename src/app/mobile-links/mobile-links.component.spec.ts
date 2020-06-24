import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLinksComponent } from './mobile-links.component';

describe('MobileLinksComponent', () => {
  let component: MobileLinksComponent;
  let fixture: ComponentFixture<MobileLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
