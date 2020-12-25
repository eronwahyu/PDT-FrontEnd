import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
@Component({
  selector: 'app-cekkantong',
  templateUrl: './cekkantong.page.html',
  styleUrls: ['./cekkantong.page.scss'],
})
export class CekkantongPage implements OnInit {

  constructor(
    public toastCtrl: ToastController,
  ) { 
   
  }

  ngOnInit() {
   
  }
 

  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Data telah tersimpan',   
      duration: 4000  
    });  
    toast.present();  
  }  
  async hapus() {  
    const toast = await this.toastCtrl.create({  
      message: 'Data telah dihapus',   
      duration: 4000  
    });  
    toast.present();  
  }  
}
