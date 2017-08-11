import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPlataformaComponent } from './adicionar-plataforma.component';

describe('AdicionarPlataformaComponent', () => {
  let component: AdicionarPlataformaComponent;
  let fixture: ComponentFixture<AdicionarPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
