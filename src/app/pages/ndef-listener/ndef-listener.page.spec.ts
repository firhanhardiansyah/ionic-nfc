import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NdefListenerPage } from './ndef-listener.page';

describe('NdefListenerPage', () => {
  let component: NdefListenerPage;
  let fixture: ComponentFixture<NdefListenerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdefListenerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NdefListenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
