import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablenComponent } from './tablen.component';

describe('TablenComponent', () => {
  let component: TablenComponent;
  let fixture: ComponentFixture<TablenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablenComponent]
    });
    fixture = TestBed.createComponent(TablenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
