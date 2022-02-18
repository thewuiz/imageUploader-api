import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { ImageLinkRoutingModule } from './image-link-routing.module';
import { ImageLinkComponent } from './pages/image-link.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ImageLinkComponent],
  imports: [
    CommonModule,
    ImageLinkRoutingModule,
    SharedModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ImageLinkModule {}
