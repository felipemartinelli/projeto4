import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemIdComponent } from './listagem-id.component';

describe('ListagemIdComponent', () => {
  let component: ListagemIdComponent;
  let fixture: ComponentFixture<ListagemIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
