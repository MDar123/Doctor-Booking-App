import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp , provideFirebaseApp} from '@angular/fire/app'
import { FirebaseApp } from '@firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDOJQb_arZbO-gUNH5NrRQT_q1I57TO8kA",
  authDomain: "authentication-app-9fc33.firebaseapp.com",
  projectId: "authentication-app-9fc33",
  storageBucket: "authentication-app-9fc33.appspot.com",
  messagingSenderId: "561196840593",
  appId: "1:561196840593:web:b44099bd6d1041f82db130"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(),
 importProvidersFrom([provideFirebaseApp( ()=> initializeApp(firebaseConfig)),]),
  ],
};
