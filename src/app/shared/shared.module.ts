import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [HeaderComponent, DateFormatPipe],
  imports: [CommonModule, NgxSkeletonLoaderModule],
  exports: [HeaderComponent, DateFormatPipe, NgxSkeletonLoaderModule],
})
export class SharedModule {}
