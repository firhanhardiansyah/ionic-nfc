import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ndef-listener',
  templateUrl: './ndef-listener.page.html',
  styleUrls: ['./ndef-listener.page.scss'],
  providers: [Ndef, NFC],
})
export class NdefListenerPage implements OnInit {
  recordStorage = [];

  constructor(
    private nfc: NFC,
    private ndef: Ndef,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.onDeviceReady();
  }

  funAddTagDiscoveredListener() {
    this.nfc.addTagDiscoveredListener().subscribe((data) => {
      let record = this.ndef.record(
        this.ndef.TNF_MIME_MEDIA,
        data.tag.techTypes,
        data.tag.id,
        ''
      );

      // localStorage.setItem('add_record', JSON.stringify(record));
      // let storage = localStorage.getItem('add_record');

      this.recordStorage.push(JSON.stringify(record));

      console.log(JSON.stringify(data));

      this.presentToast(this.recordStorage);
    });
  }

  readerMode() {
    this.nfc.readerMode(this.nfc.FLAG_READER_NFC_A).subscribe((tag) => {
      console.log(JSON.stringify(tag));
    });
  }

  share() {
    this.nfc.addTagDiscoveredListener().subscribe((data) => {
      let record = this.ndef.record(
        this.ndef.TNF_MIME_MEDIA,
        data.tag.techTypes,
        data.tag.id,
        ''
      );

      var message = [this.ndef.textRecord('')];
      let a = this.nfc.share(message);
      console.log('hayu : ' + JSON.stringify(record));
    });
  }

  async handleDesfire(nfcEvent) {
    const DESFIRE_SELECT_PICC = '00 A4 04 00 07 D2 76 00 00 85 01 00';
    const DESFIRE_SELECT_AID = '90 5A 00 00 03 AA AA AA 00'
    const tagId = this.nfc.bytesToHexString(nfcEvent.tag.id);
    console.log('Processing', tagId);

    // try {
    //   await this.nfc.connect('android.nfc.tech.IsoDep', 500);
    //   console.log('connected to', tagId);

    //   let response = await this.nfc.transceive(DESFIRE_SELECT_PICC);
    //   this.ensureResponseIs('9000', response);

    //   response = await this.nfc.transceive(DESFIRE_SELECT_AID);
    //   this.ensureResponseIs('9100', response);
    //   // 91a0 means the requested application not found

    //   alert('Selected application AA AA AA');

    //   // more transcieve commands go here
    // } catch (error) {
    //   alert(error);
    // } finally {
    //   await this.nfc.close();
    //   console.log('closed');
    // }
  }

  arrayBufferToHexString(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
  }

  ensureResponseIs(expectedResponse, buffer) {
    
    const responseString = this.arrayBufferToHexString(buffer);
    if (expectedResponse !== responseString) {
      const error =
        'Expecting ' + expectedResponse + ' but received ' + responseString;
      throw error;
    }
  }

  onDeviceReady() {
    this.nfc.addTagDiscoveredListener(this.handleDesfire);
  }

  async presentToast(params) {
    const toast = await this.toastCtrl.create({
      header: 'Record',
      message: `Data : ${params}`,
      position: 'middle',
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
      ],
    });
    toast.present();
  }
}
