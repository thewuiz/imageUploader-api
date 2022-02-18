import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'upload',
    loadChildren: () =>
      import('@modules/uploader-image/uploader-image.module').then(
        (m) => m.UploaderImageModule
      ),
  },
  { path: '**', redirectTo: '/upload' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
