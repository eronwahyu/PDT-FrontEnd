import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';

@Component({
  selector: 'app-cari',
  templateUrl: './cari.page.html',
  styleUrls: ['./cari.page.scss'],
})
export class CariPage implements OnInit {

  constructor( public toastCtrl: ToastController,) { }

  ngOnInit() {
  }
  async cari() {  
    const toast = await this.toastCtrl.create({  
      message: 'Hasil Telah Didapakan',   
      duration: 4000  
    });  
    toast.present();  
  }  
  async keluar() {  
    const toast = await this.toastCtrl.create({  
      message: 'Anda Keluar',   
      duration: 4000  
    });  
    toast.present();  
  }  
}