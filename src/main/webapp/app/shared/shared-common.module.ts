import { NgModule } from '@angular/core';

import { TestNetsuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TestNetsuiviSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TestNetsuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestNetsuiviSharedCommonModule {}
