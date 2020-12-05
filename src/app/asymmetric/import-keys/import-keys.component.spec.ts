import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportKeysComponent } from './import-keys.component';

describe('ImportKeysComponent', () => {
  let component: ImportKeysComponent;
  let fixture: ComponentFixture<ImportKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
