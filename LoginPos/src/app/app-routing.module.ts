import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cekkantong',
    loadChildren: () => import('./cekkantong/cekkantong.module').then( m => m.CekkantongPageModule)
  },
  {
    path: 'pilihbc',
    loadChildren: () => import('./pilihbc/pilihbc.module').then( m => m.PilihbcPageModule)
  },
  {
    path: 'pilihpos',
    loadChildren: () => import('./pilihpos/pilihpos.module').then( m => m.PilihposPageModule)
  },
  {
    path: 'pilihgudang',
    loadChildren: () => import('./pilihgudang/pilihgudang.module').then( m => m.PilihgudangPageModule)
  },
  {
    path: 'cekkoneksi',
    loadChildren: () => import('./cekkoneksi/cekkoneksi.module').then( m => m.CekkoneksiPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'cari',
    loadChildren: () => import('./cari/cari.module').then( m => m.CariPageModule)
  },
];

@NgModule({
  imports: [
  // imports: [RouterModule.forRoot(routes)],
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
