import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListenUsComponent } from './listen-us.component';

describe('ListenUsComponent', () => {
  let component: ListenUsComponent;
  let fixture: ComponentFixture<ListenUsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
