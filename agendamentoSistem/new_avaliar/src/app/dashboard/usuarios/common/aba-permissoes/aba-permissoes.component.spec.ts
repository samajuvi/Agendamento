import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaPermissoesComponent } from './aba-permissoes.component';

describe('AbaPermissoesComponent', () => {
  let component: AbaPermissoesComponent;
  let fixture: ComponentFixture<AbaPermissoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaPermissoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaPermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
