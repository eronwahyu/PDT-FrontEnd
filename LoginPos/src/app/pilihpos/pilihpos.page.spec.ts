import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihposPage } from './pilihpos.page';

describe('PilihposPage', () => {
  let component: PilihposPage;
  let fixture: ComponentFixture<PilihposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
