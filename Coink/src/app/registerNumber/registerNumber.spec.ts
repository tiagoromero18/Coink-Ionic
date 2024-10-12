import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterNumberPage } from './registerNumber.page';
describe('registerNumber', () => {
  let component: RegisterNumberPage;
  let fixture: ComponentFixture<RegisterNumberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterNumberPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
