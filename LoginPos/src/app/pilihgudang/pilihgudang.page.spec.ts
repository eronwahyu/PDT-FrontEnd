import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihgudangPage } from './pilihgudang.page';

describe('PilihgudangPage', () => {
  let component: PilihgudangPage;
  let fixture: ComponentFixture<PilihgudangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihgudangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihgudangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
