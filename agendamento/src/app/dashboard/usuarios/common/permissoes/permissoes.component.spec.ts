import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissoesComponent } from './permissoes.component';

describe('PermissoesComponent', () => {
  let component: PermissoesComponent;
  let fixture: ComponentFixture<PermissoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
