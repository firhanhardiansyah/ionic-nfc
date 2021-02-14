import { Component } from '@angular/core';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reader-nfc',
  templateUrl: './reader-nfc.page.html',
  styleUrls: ['./reader-nfc.page.scss'],
  providers: [NFC, Ndef]
})
export class ReaderNfcPage {

  constructor(
    private nfc: NFC,
    private ndef: Ndef,
    private toastCtrl: ToastController
  ) { }

  ionViewWillEnter() {
    this.addListenNFC();
  }

  ionViewDidLeave()
  {
    this.addListenNFC();

  }

  addListenNFC() {
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;

    this.nfc.readerMode(flags).subscribe(
      tag => {
        let tagId = this.nfc.bytesToHexString(tag.id);
        this.presentToast(tagId);
      },
      err => console.log(err)
    )
  }
  
  async presentToast(params) {
    const toast = await this.toastCtrl.create({
      header: 'Reading NFC',
      message: `Tag ID : ${params}`,
      position: 'top',
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }

}
