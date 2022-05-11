import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmTextareaComponent } from './om-textarea.component';

describe('OmTextareaComponent', () => {
  let component: OmTextareaComponent;
  let fixture: ComponentFixture<OmTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
