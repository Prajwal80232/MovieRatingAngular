
import { Routes } from '@angular/router';
import { MovieListComponent } from './app/movies/movie-list/movie-list.component';
import { MovieComponent } from './app/movies/movie/movie.component';
import { MoviesComponent } from './app/movies/movies.component';
import { UserComponent } from './app/user/user.component';
import { SignUpComponent } from './app/user/sign-up/sign-up.component';
import { SignInComponent } from './app/user/sign-in/sign-in.component';
import { AuthGuard } from './app/Auth/auth.guard';


export const appRoutes: Routes = [
    { path: 'movies-list', component: MovieListComponent, canActivate: [AuthGuard] },
    { path: 'movie', component: MovieComponent, canActivate: [AuthGuard] },
    { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];