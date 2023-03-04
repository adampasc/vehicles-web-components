import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { importProvidersFrom } from '@angular/core';

(async () => {

  const app = await createApplication({
    providers: [
      importProvidersFrom(PorscheDesignSystemModule.load({ prefix: 'vehicles-b' }))
    ],
  });

  const component = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('my-component-b', component);

})();
