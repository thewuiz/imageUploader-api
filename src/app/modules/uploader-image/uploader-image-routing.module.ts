import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploaderImageComponent } from './pages/uploader-image.component';

const routes: Routes = [
  {
    path: '',
    component: UploaderImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaderImageRoutingModule {}
