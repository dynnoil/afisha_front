import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AgmCoreModule } from '@agm/core';

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
import { Calendar } from '@ionic-native/calendar';

import { AlertsService } from '../services/alerts.service';
import { ActionSheetService } from '../services/action-sheet.service';
import { ToastService } from '../services/toast.service';
import { EventService } from '../services/event.service';
import { SharingService } from '../services/sharing.service';
import { EventStorageService } from '../services/event-storage.service';

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
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDsBqAWWUYSX5XmYSmuTHCvmaxzGrIR_8w'
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
        Calendar,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AlertsService,
        ActionSheetService,
        ToastService,
        EventService,
        SharingService,
        EventStorageService
    ]
})
export class AppModule { }
