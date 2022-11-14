import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { LoginActions } from '../../actions/login.actions';
import { ILoginEmailPassword, ILoginState } from '../../interfaces/login.interface';
import { SelectLogin } from '../../selectors/login.selectors';

@Component({
  selector: 'bit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  // PRIVATES
  private _sub: Subscription = Subscription.EMPTY;

  // PUBLICS
  public loginForm: FormGroup = new FormGroup('');
  public isError$ = this._loginStore.select(SelectLogin).pipe(map(x => x.isError));

  constructor(
    private _loginStore: Store<ILoginState>,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  ngOnInit(): void {
    this._initFormGroup();
    this._initSubscriber();
  }
  
  /**
  * methode initalisiert die form gruppe
  */
  private _initFormGroup(): void {
    this.loginForm = this._fb.group({
      email: new FormControl('michael.lawson@reqres.in'),
      password: new FormControl('1234ABC')
    });
  }

  /**
  * Methode initialisiert die Subscriber.
  */
  private _initSubscriber(): void {
    this._sub = this._loginStore.select(SelectLogin).subscribe(() => this._router.navigate(['home']));
  }

  // EVENTS

  /**
   * Button onclick event
   */
  public onLoginClick(): void {
    const frm = <ILoginEmailPassword>this.loginForm.value; 
    this._loginStore.dispatch(LoginActions.getLoginToken(frm));    
  }
}
