import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { RegisterDataPage } from './registerData.page';
describe('registerData', () => {
  let component: RegisterDataPage;
  let fixture: ComponentFixture<RegisterDataPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterDataPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
