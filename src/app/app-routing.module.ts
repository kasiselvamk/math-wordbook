import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () => import('./math/unit1/unit1.module').then(mod => mod.Unit1Module)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./math/unit1/unit1.module').then(mod => mod.Unit1Module)
  },
  {
    path: 'multiples-and-factors',
    loadChildren: () => import('./math/unit2/unit2.module').then(mod => mod.Unit2Module)
  },
  {
    path: 'algebraic-expressions',
    loadChildren: () => import('./math/unit3/unit3.module').then(mod => mod.Unit3Module)
  },
  {
    path: 'commercial-mathematics',
    loadChildren: () => import('./math/unit4/unit4.module').then(mod => mod.Unit4Module)
  },
  {
    path: 'geometry',
    loadChildren: () => import('./math/unit5/unit5.module').then(mod => mod.Unit5Module)
  },
  {
    path: 'mensuration',
    loadChildren: () => import('./math/unit6/unit6.module').then(mod => mod.Unit6Module)
  },
  {
    path: 'set-language',
    loadChildren: () => import('./math/unit7/unit7.module').then(mod => mod.Unit7Module)
  },
  {
    path: 'real-numbers',
    loadChildren: () => import('./math/unit8/unit8.module').then(mod => mod.Unit8Module)
  },
  {
    path: 'surds',
    loadChildren: () => import('./math/unit9/unit9.module').then(mod => mod.Unit9Module)
  },
  {
    path: 'linear-equations-in-two-variables' ,
    loadChildren: () => import('./math/unit10/unit10.module').then(mod => mod.Unit10Module)
  },
  {
    path: 'quadratic-equations' ,
    loadChildren: () => import('./math/unit11/unit11.module').then(mod => mod.Unit11Module)
  },
  {
    path: 'banking' ,
    loadChildren: () => import('./math/unit12/unit12.module').then(mod => mod.Unit12Module)
  },
  {
    path: 'logarithms' ,
    loadChildren: () => import('./math/unit13/unit13.module').then(mod => mod.Unit13Module)
  },
  {
    path: 'loci-and-concurrency' ,
    loadChildren: () => import('./math/unit14/unit14.module').then(mod => mod.Unit14Module)
  },
  {
    path: 'trignometry', 
    loadChildren: () => import('./math/unit15/unit15.module').then(mod => mod.Unit15Module)
  },
  {
    path: 'computing', 
    loadChildren: () => import('./math/unit16/unit16.module').then(mod => mod.Unit16Module)
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
