import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';

const { Network } = Plugins;


@Component({
  selector: 'app-cekkoneksi',
  templateUrl: './cekkoneksi.page.html',
  styleUrls: ['./cekkoneksi.page.scss'],
})
export class CekkoneksiPage implements OnInit {

  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  async ngOnInit() {
    
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      console.log("Network status changed", status);
      this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();
  }

  ngOnDestroy() {
    this.networkListener.remove();
  }
}
