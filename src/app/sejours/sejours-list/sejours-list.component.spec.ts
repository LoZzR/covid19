import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejoursListComponent } from './sejours-list.component';

describe('SejoursListComponent', () => {
  let component: SejoursListComponent;
  let fixture: ComponentFixture<SejoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejoursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SejoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
