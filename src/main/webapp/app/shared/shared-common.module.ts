import { NgModule } from '@angular/core';

import { MyFirstApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MyFirstApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MyFirstApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MyFirstApplicationSharedCommonModule {}
