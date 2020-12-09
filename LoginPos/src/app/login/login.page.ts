import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  FormLogin:FormGroup;
  showPasswordText:any;
  dataLogin:any;

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController, 
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private serviceService: ServiceService,
  ) { }

  ngOnInit() {
    //setting form login
    this.FormLogin=this.formBuilder.group({
      idpetugas:['',Validators.required],
      passpetugas:['',Validators.required]
    });
  }

  //fungsi login
  async login(){
    //menampilkan loading
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present(); 
    //memanggil fungsi loginapi yang berada di service
    http://10.60.64.25:8280/iPosPDTAPI/1.0/LoginPDT
    this.serviceService.loginApi(this.FormLogin.value,'loginpdtaja').subscribe(
      data => {
        this.dataLogin=data;
        if(this.dataLogin.respon=="error"){
          let message="Username atau Password Salah Mohon periksa kembali";
          this.presentToast(message);
        }
        loading.dismiss();
      },
      error => {
        let message='Tidak ada koneksi internet. Silakan periksa koneksi Anda.';
        this.presentToast(message);
        loading.dismiss();
        console.log(this.dataLogin);
      }
    );
  }

  //menampilkan halaman register
  async registerModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "bottom"
    });
    toast.present();
  }

}

