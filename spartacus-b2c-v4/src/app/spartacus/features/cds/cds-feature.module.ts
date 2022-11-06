import { NgModule } from '@angular/core';
import { CdsConfig, CdsModule } from "@spartacus/cds";
import { provideConfig } from "@spartacus/core";

@NgModule({
  declarations: [],
  imports: [
    CdsModule.forRoot()
  ],
  providers: [provideConfig(<CdsConfig>{
    cds: {
      tenant: 'my-tenant',
      baseUrl: ' https://spartacus-demo.eastus.cloudapp.azure.com:8443',
      endpoints: {
        strategyProducts: '/strategy/${tenant}/strategies/${strategyId}/products',
      },
      merchandising: {
        defaultCarouselViewportThreshold: 80,
      },
    },
  })]
})
export class CdsFeatureModule { }
