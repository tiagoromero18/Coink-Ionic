import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { legalInfoPage } from './legalInfo.page';
describe('legalInfo', () => {
  let component: legalInfoPage;
  let fixture: ComponentFixture<legalInfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [legalInfoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(legalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
