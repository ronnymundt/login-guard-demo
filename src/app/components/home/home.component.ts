import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { ILoginState, LoginActions } from '../../+state/login';

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
})
export class HomeComponent {
  constructor(private _store: Store<ILoginState>) {}

  /**
   * Button onclick event
   */
  onLogoutClick(): void {
    this._store.dispatch(LoginActions.setLogout());
  }
}
