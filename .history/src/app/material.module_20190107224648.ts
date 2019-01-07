import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule
} from '@angular/material';


@NgModule({
    imports: [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule],
    exports : [
            MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule
            ]
})

export class MaterialModule {}

