import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent  } from './login/login.component';
import { AppComponent } from './app.component';
export const routes:Routes=[
    { path: '', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
];