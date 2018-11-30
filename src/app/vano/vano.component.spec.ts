import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanoComponent } from './vano.component';

describe('VanoComponent', () => {
  let component: VanoComponent;
  let fixture: ComponentFixture<VanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
