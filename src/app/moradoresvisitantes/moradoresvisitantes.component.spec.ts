import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradoresvisitantesComponent } from './moradoresvisitantes.component';

describe('MoradoresvisitantesComponent', () => {
  let component: MoradoresvisitantesComponent;
  let fixture: ComponentFixture<MoradoresvisitantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradoresvisitantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradoresvisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
