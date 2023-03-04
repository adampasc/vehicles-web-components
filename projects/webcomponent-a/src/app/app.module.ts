import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { LazyElementsModule } from '@angular-extensions/elements';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PorscheDesignSystemModule.load({ prefix: 'vehicles-a' })
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const comp = createCustomElement(
      AppComponent,
      { injector: this.injector }
    );
    customElements.define('my-component-a', comp);
  }
}
