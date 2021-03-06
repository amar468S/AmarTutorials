import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule
} from '@angular/material';


@NgModule({
    imports: [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule],
    exports : [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule
            ]
})

export class MaterialModule {}

