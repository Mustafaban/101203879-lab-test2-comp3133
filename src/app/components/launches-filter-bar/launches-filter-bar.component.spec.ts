import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesFilterBarComponent } from './launches-filter-bar.component';

describe('LaunchesFilterBarComponent', () => {
  let component: LaunchesFilterBarComponent;
  let fixture: ComponentFixture<LaunchesFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchesFilterBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
