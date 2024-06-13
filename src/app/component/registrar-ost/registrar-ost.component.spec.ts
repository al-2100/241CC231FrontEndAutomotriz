import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOstComponent } from './registrar-ost.component';

describe('RegistrarOstComponent', () => {
  let component: RegistrarOstComponent;
  let fixture: ComponentFixture<RegistrarOstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarOstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarOstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
