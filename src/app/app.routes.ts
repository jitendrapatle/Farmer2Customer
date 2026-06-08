import { Routes } from '@angular/router';
import { Category } from './pages/category/category';
import { Farmers } from './pages/farmers/farmers';
import { About } from './pages/about/about';
import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home) 
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)   
    },
    {
        path: 'categories',
        component: Category
    },
    {
        path: 'farmers',
        component: Farmers
    },
    {
        path: 'register',
        component: Register
    }
];
