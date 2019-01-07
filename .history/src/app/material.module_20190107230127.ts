import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
} from '@angular/material';


@NgModule({
    imports: [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule
        ],
    exports : [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule
        ]
})

export class MaterialModule {}

