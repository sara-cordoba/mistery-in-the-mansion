import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisComponent } from './synopsis.component';

describe('SynopsisComponent', () => {
  let component: SynopsisComponent;
  let fixture: ComponentFixture<SynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynopsisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
