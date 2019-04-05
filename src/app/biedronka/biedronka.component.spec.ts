import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiedronkaComponent } from './biedronka.component';

describe('BiedronkaComponent', () => {
  let component: BiedronkaComponent;
  let fixture: ComponentFixture<BiedronkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiedronkaComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiedronkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
