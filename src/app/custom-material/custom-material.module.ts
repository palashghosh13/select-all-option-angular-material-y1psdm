import { NgModule } from '@angular/core';
import { MatSelectModule, MatCheckboxModule } from '@angular/material';
import { SelectCheckAllComponent } from './select-check-all/select-check-all.component';

@NgModule({
  imports: [
    MatSelectModule, MatCheckboxModule
  ],
  exports: [
    MatSelectModule, MatCheckboxModule, SelectCheckAllComponent
  ],
  declarations: [SelectCheckAllComponent]
})
export class CustomMaterialModule {
}