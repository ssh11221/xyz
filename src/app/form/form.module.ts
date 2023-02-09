import { NgModule } from '@angular/core';
import { formComponent } from './form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        formComponent
    ],
    providers: [],
    imports: [
        FormsModule
    ],
    exports:[
        formComponent
    ]
})
export class FormModule { }