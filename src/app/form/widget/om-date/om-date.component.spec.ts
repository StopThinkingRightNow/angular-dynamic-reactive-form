import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmDateComponent } from './om-date.component';

describe('OmDateComponent', () => {
  let component: OmDateComponent;
  let fixture: ComponentFixture<OmDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
