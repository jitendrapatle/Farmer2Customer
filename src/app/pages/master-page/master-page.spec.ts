import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPage } from './master-page';

describe('MasterPage', () => {
  let component: MasterPage;
  let fixture: ComponentFixture<MasterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MasterPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
