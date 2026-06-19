import { Routes } from '@angular/router';
import { Category } from './pages/category/category';
import { Farmers } from './pages/farmers/farmers';
import { About } from './pages/about/about';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { MasterPage } from './pages/master-page/master-page';
import { Products } from './pages/products/products';
import { authGuard } from './core/guards/auth-guard';
import { authSuperAdminGuard } from './core/guards/auth-super-admin-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home},
    {
        path: 'login',
        component: Login   
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
    },
    {
        path: 'master',
        component: MasterPage,
        canActivate: [authGuard,authSuperAdminGuard]
    },
    {
        path: 'products',
        component: Products
    }
];
