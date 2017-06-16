import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AboutPage } from '../pages/about/about';
import { FavoritesPage } from '../pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';

import { EventCardComponent } from '../components/event-card/event-card.component';
import { GoogleMapsComponent } from '../components/google-maps/google-maps.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

import { EventService } from '../services/event.service';
import { SharingService } from '../services/sharing.service';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        FavoritesPage,
        HomePage,
        TabsPage,
        DetailsPage,
        EventCardComponent,
        GoogleMapsComponent
    ],
    imports: [
        BrowserModule,
        LocalStorageModule.withConfig({
            prefix: 'afisha-app',
            storageType: 'localStorage'
        }),
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        FavoritesPage,
        HomePage,
        TabsPage,
        DetailsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SocialSharing,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        EventService,
        SharingService
    ]
})
export class AppModule { }
