import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule} from '@angular/material';
@NgModule({
    imports: [MatBadgeModule,
            MatButtonModule,
            MatToolbarModule],
    exports : [MatBadgeModule, MatButtonModule, MatToolbarModule]
})

export class MaterialModule {}

