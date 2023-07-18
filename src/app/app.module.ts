import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SlidesComponent } from './tutorial/slides/slides.component';

import { PreferencesService } from './services/preferences.service';
import { SettingsComponent } from './tutorial/settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TermsComponent } from './tutorial/terms/terms.component';

export function initializeFactory(init: PreferencesService) {
  return () => init.InitializeFirstAccess();
}

@NgModule({
  declarations: [AppComponent,SlidesComponent,SettingsComponent,TermsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgbModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreferencesService,
    { provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [PreferencesService],
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
