import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetricDecryptionComponent } from './symmetric-decryption.component';

describe('SymmetricDecryptionComponent', () => {
  let component: SymmetricDecryptionComponent;
  let fixture: ComponentFixture<SymmetricDecryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymmetricDecryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymmetricDecryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
