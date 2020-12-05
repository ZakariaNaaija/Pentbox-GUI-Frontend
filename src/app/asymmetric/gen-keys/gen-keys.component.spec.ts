import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenKeysComponent } from './gen-keys.component';

describe('GenKeysComponent', () => {
  let component: GenKeysComponent;
  let fixture: ComponentFixture<GenKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
