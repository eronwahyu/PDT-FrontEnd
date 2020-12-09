import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CariPage } from './cari.page';

describe('CariPage', () => {
  let component: CariPage;
  let fixture: ComponentFixture<CariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
