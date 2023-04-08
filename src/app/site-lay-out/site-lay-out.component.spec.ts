import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayOutComponent } from './site-lay-out.component';

describe('SiteLayOutComponent', () => {
  let component: SiteLayOutComponent;
  let fixture: ComponentFixture<SiteLayOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLayOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
