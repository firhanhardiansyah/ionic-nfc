import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReaderNfcPage } from './reader-nfc.page';

describe('ReaderNfcPage', () => {
  let component: ReaderNfcPage;
  let fixture: ComponentFixture<ReaderNfcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderNfcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReaderNfcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
