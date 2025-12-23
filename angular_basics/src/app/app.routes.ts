import { Routes } from '@angular/router';
import { SignUp } from './sign-up/sign-up';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { NotFound } from './not-found/not-found';
import { Students } from './students/students';

export const routes: Routes = [

    {
        path: 'sign-up',
        component: SignUp
        // loadComponent: () => import('./sign-up/sign-up').then(m => m.SignUp)
    },
    {
        path: 'login',
        component: ReactiveForms
    },
    {
        path: 'student',
        component: Students
    },
    {
        path: 'student/:id',
        component: Students
    },
    {
        path: '',
        redirectTo: 'sign-up',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFound
    },


];
