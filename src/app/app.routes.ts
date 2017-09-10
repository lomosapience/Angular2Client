import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';


export const routes: Routes = [
  // {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent}
];

export const AuthProviders = [];

export const Routing = RouterModule.forRoot(routes);
