import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdocutsTableComponent } from './products-table.component';

describe('PrdocutsTableComponent', () => {
  let component: PrdocutsTableComponent;
  let fixture: ComponentFixture<PrdocutsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdocutsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdocutsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
