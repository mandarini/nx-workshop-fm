import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgHeaderComponent } from './ng-header/ng-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgHeaderComponent],
  exports: [NgHeaderComponent],
})
export class OtherUiSharedModule {}
