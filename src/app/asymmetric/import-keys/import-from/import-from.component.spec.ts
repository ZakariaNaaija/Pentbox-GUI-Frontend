import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFromComponent } from './import-from.component';

describe('ImportFromComponent', () => {
  let component: ImportFromComponent;
  let fixture: ComponentFixture<ImportFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
