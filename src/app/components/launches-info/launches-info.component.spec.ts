import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesInfoComponent } from './launches-info.component';

describe('LaunchesInfoComponent', () => {
  let component: LaunchesInfoComponent;
  let fixture: ComponentFixture<LaunchesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
