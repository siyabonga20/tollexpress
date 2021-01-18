import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollgateComponent } from './tollgate.component';

describe('TollgateComponent', () => {
  let component: TollgateComponent;
  let fixture: ComponentFixture<TollgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TollgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TollgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
