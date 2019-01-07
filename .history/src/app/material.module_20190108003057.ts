import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
} from '@angular/material';


@NgModule({
    imports: [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule,
            MatTabsModule
        ],
    exports : [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule,
            MatTabsModule
        ]
})

export class MaterialModule {}

