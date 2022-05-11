import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmInputComponent } from './om-input.component';

describe('OmInputComponent', () => {
  let component: OmInputComponent;
  let fixture: ComponentFixture<OmInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
