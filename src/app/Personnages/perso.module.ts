import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PersoListComponent } from './perso-list/perso-list.component';
import { PersoDetailComponent } from './perso-detail/perso-detail.component';
import { EditPersoComponent } from './edit-perso/edit-perso.component';
import { PersoFormComponent } from './perso-form/perso-form.component';
import { AddPersoComponent } from './add-perso/add-perso.component';
import { PersoChakraColorPipe } from './perso-chakra-color.pipe';
import { BorderCardDirective } from  './border-card.directive';
import { SearchPersoComponent } from './search-perso/search-perso.component';
import { LoaderComponent } from './loader/loader.component'


const persoRoutes:Routes = [
  {path: 'edit/perso/:id' , component:EditPersoComponent},
  {path: 'perso/add', component:AddPersoComponent},
  {path: 'perso', component:PersoListComponent},
  {path: 'perso/:id', component:PersoDetailComponent}
]

@NgModule({
  declarations: [
    PersoListComponent,
    PersoDetailComponent,
    EditPersoComponent,
    PersoFormComponent,
    AddPersoComponent,
    PersoChakraColorPipe,
    BorderCardDirective,
    SearchPersoComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(persoRoutes),
  ]
})
export class PersoModule { }
