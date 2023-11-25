import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{ path: 'search', component: SearchComponent},
                        {path : 'info', component : InfoComponent},
                        {path : 'about', component : AboutComponent},
                        {path: '', redirectTo: '/search', pathMatch: 'full' },
                        {path : '**', component: SearchComponent},
                      
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
