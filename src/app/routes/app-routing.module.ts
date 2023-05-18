import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrregularVerbsComponent } from '../view/irregular-verbs/irregular-verbs.component';

const routes: Routes = [{
  path: 'irregular-verbs', component: IrregularVerbsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
