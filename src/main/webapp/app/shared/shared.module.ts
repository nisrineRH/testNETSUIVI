import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestNetsuiviSharedLibsModule, TestNetsuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestNetsuiviSharedLibsModule, TestNetsuiviSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestNetsuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestNetsuiviSharedModule {
  static forRoot() {
    return {
      ngModule: TestNetsuiviSharedModule
    };
  }
}
