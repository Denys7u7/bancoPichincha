import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [HeaderComponent, DateFormatPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, DateFormatPipe],
})
export class SharedModule {}
