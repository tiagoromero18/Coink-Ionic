import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { welcomePage } from './welcome.page';
describe('welcome', () => {
  let component: welcomePage;
  let fixture: ComponentFixture<welcomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [welcomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(welcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});