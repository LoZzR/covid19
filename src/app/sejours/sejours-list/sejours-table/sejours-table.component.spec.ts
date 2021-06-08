import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejoursTableComponent } from './sejours-table.component';

describe('SejoursTableComponent', () => {
  let component: SejoursTableComponent;
  let fixture: ComponentFixture<SejoursTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejoursTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SejoursTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
