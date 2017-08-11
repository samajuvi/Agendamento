import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerttagComponent } from './alerttag.component';

describe('AlerttagComponent', () => {
  let component: AlerttagComponent;
  let fixture: ComponentFixture<AlerttagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerttagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerttagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
