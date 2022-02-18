import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

@NgModule({
  declarations: [AppFooterComponent, ProgressbarComponent],
  exports: [AppFooterComponent, ProgressbarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
