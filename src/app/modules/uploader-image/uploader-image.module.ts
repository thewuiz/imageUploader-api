import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderImageRoutingModule } from './uploader-image-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploaderImageComponent } from './pages/uploader-image.component';

@NgModule({
  declarations: [UploaderImageComponent],
  imports: [CommonModule, UploaderImageRoutingModule, SharedModule],
})
export class UploaderImageModule {}
