import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatButton } from '@angular/material/button';
import {ILoginState, LoginActions} from "../../+state/login";

@Component({
    selector: 'bit-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MatButton]
})
export class HomeComponent {

  constructor(
    private _store: Store<ILoginState>
  ) { }

  // EVENTS

  /**
   * Button onclick event
   */
  public onLogoutClick(): void {
    this._store.dispatch(LoginActions.setLogout());
  }
}
