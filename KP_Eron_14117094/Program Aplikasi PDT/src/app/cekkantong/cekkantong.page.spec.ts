import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CekkantongPage } from './cekkantong.page';

describe('CekkantongPage', () => {
  let component: CekkantongPage;
  let fixture: ComponentFixture<CekkantongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekkantongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CekkantongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
