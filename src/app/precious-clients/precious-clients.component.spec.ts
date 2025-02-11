import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciousClientsComponent } from './precious-clients.component';

describe('PreciousClientsComponent', () => {
  let component: PreciousClientsComponent;
  let fixture: ComponentFixture<PreciousClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreciousClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreciousClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
