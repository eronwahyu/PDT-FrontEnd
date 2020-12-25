import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihbcPage } from './pilihbc.page';

describe('PilihbcPage', () => {
  let component: PilihbcPage;
  let fixture: ComponentFixture<PilihbcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihbcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihbcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
