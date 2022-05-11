import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmDropdownComponent } from './om-dropdown.component';

describe('OmDropdownComponent', () => {
  let component: OmDropdownComponent;
  let fixture: ComponentFixture<OmDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
