import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyfisComponent } from './gyfis.component';

describe('GyfisComponent', () => {
  let component: GyfisComponent;
  let fixture: ComponentFixture<GyfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyfisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
