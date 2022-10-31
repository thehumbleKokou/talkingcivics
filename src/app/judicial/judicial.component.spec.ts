import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicialComponent } from './judicial.component';

describe('JudicialComponent', () => {
  let component: JudicialComponent;
  let fixture: ComponentFixture<JudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
