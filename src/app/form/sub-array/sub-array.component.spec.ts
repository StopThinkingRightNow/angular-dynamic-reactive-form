import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubArrayComponent } from './sub-array.component';

describe('SubArrayComponent', () => {
  let component: SubArrayComponent;
  let fixture: ComponentFixture<SubArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
