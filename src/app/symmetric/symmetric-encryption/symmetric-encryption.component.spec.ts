import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetricEncryptionComponent } from './symmetric-encryption.component';

describe('SymmetricEncryptionComponent', () => {
  let component: SymmetricEncryptionComponent;
  let fixture: ComponentFixture<SymmetricEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymmetricEncryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymmetricEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
