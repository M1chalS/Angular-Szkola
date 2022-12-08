import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnukComponent } from './wnuk.component';

describe('WnukComponent', () => {
  let component: WnukComponent;
  let fixture: ComponentFixture<WnukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WnukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WnukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
