import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';

const routes:Routes = [
    {path: 'accomodation', component:AccomodationComponent},
    {path :''},
    {}

];

@NgModule({
    imports : [],
    exports: []
})

export class AppRoutingModule {}