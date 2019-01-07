import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatNavList
} from '@angular/material';


@NgModule({
    imports: [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatNavList
        ],
    exports : [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatNavList
        ]
})

export class MaterialModule {}

