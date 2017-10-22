import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackmapPage } from './trackmap';

@NgModule({
  declarations: [
    TrackmapPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackmapPage),
  ],
})
export class TrackmapPageModule {}
