import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CekkoneksiPage } from './cekkoneksi.page';

describe('CekkoneksiPage', () => {
  let component: CekkoneksiPage;
  let fixture: ComponentFixture<CekkoneksiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekkoneksiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CekkoneksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
