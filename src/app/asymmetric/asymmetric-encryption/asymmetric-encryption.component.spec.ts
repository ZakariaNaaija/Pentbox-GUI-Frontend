import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsymmetricEncryptionComponent } from './asymmetric-encryption.component';

describe('AsymmetricEncryptionComponent', () => {
  let component: AsymmetricEncryptionComponent;
  let fixture: ComponentFixture<AsymmetricEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsymmetricEncryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsymmetricEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
