import { Component } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NFC, Ndef]
})
export class HomePage {
  nfc_id: string;

  constructor(
    private nfc: NFC,
    private ndef: Ndef,
    private toastCtrl: ToastController
  ) {}

  ionViewWillEnter() {
    this.check();
    setInterval(() => {
      this.check()
    }, 2000)
  }

  check() {
    let flags = this.nfc.FLAG_READER_NFC_A;

    this.nfc.readerMode(flags).subscribe(
      tag => {
        console.log(JSON.stringify(tag))
        if (tag.id) {
          console.log(this.nfc.bytesToHexString(tag.id));
        }

        const id = this.nfc.bytesToHexString(tag.id)
        this.presentToastWithOptions(id);
        this.nfcID(id);
        
      },
      err => console.log(err)
    )
  }

  async nfcID(id) {
    this.nfc_id = await id;
    return this.nfc_id;
  }

  async presentToastWithOptions(params) {
    const toast = await this.toastCtrl.create({
      header: 'Reading Success',
      message: params,
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
