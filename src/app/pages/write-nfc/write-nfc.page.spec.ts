import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WriteNfcPage } from './write-nfc.page';

describe('WriteNfcPage', () => {
  let component: WriteNfcPage;
  let fixture: ComponentFixture<WriteNfcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteNfcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WriteNfcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
