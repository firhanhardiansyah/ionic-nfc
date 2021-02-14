import { Component, OnInit } from '@angular/core';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-write-nfc',
  templateUrl: './write-nfc.page.html',
  styleUrls: ['./write-nfc.page.scss'],
  providers: [NFC, Ndef],
})
export class WriteNfcPage implements OnInit {

  asyncPromise: Promise<string>;
  asyncObservable: Observable<string>;

  promiseData: any;
  msg: any;

  constructor(private nfc: NFC, private ndef: Ndef) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.write();
  }
  
  write()
  {
    let msg = [
      this.ndef.textRecord("Hello World"),
      this.ndef.uriRecord("http://github.com/chariotsolutions/phonegap-nfc")
    ]

    this.nfc.write(msg).then(tag => {
      console.log(tag);
      
    })
  }
}
