import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Ndef, NFC]
})
export class HomePage {

  constructor(
    private router: Router,
    private nfc: NFC,
    private ndef: Ndef,
    private toastCtrl: ToastController
  ) {}

  readerPage() {
    this.router.navigate(['reader-nfc']);
  }

  settingNFCPage()
  {
    this.nfc.showSettings()
  }

  writePage() {
    this.router.navigate(['write-nfc']);
  }

  

  ndefListenerPage()
  {
    this.router.navigate(['ndef-listener']);
  }

  tagTechnology()
  {
    this.router.navigate(['tag-technology']);
  }

  cekNFC()
  {
    this.nfc.enabled().then(() => {
      this.addListenNFC('OK', 'checkmark')
    }).catch(err => {
      this.addListenNFC('NO', 'alert')
    })
  }

  async addListenNFC(msg, icon) {
    const toast = await this.toastCtrl.create({
      header: 'Reading NFC',
      message: msg,
      position: 'top',
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: icon,
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
