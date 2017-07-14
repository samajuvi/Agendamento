import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasDisponiveisComponent } from '../datas-disponiveis.component';

describe('DatasDisponiveisComponent', () => {
  let component: DatasDisponiveisComponent;
  let fixture: ComponentFixture<DatasDisponiveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasDisponiveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
