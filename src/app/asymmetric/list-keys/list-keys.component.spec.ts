import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeysComponent } from './list-keys.component';

describe('ListKeysComponent', () => {
  let component: ListKeysComponent;
  let fixture: ComponentFixture<ListKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
