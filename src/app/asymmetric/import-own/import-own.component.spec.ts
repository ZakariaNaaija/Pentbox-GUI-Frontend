import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOwnComponent } from './import-own.component';

describe('ImportOwnComponent', () => {
  let component: ImportOwnComponent;
  let fixture: ComponentFixture<ImportOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
