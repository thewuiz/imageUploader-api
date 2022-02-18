import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageLinkComponent } from './pages/image-link.component';

const routes: Routes = [
  {
    path: '',
    component: ImageLinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageLinkRoutingModule {}
