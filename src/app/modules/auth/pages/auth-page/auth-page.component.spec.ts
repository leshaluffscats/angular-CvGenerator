import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { IAuthCredentials } from 'src/app/shared/interfaces/auth-api.interface';
import { AuthPageComponent } from './auth-page.component';

describe('auth page component', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      declarations: [AuthPageComponent],
      providers: [FormBuilder, { provide: Store, useValue: storeSpy }],
      imports: [InputComponent, ReactiveFormsModule, ButtonModule],
    });

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
    fixture.detectChanges();
  });

  it('should display component after detectChanges()', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getAccessToken action when login is called with valid form', () => {
    const formValue: IAuthCredentials = {
      email: 'test@example.com',
      password: 'password123',
    };
    component.authForm.setValue(formValue);
    component.login();

    expect(store.dispatch).toHaveBeenCalledWith(jasmine.any(Object));
  });
});
