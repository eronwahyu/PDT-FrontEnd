import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor( public toastCtrl: ToastController,) { }

  ngOnInit() {
  }
  async upload() {  
    const toast = await this.toastCtrl.create({  
      message: 'Data telah diupload',   
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
