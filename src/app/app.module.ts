import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//POPUP
import { AlertController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { MenuPage} from '../pages/menu/menu';
import { SobrePage} from '../pages/sobre/sobre';
import{ MelhoresPage } from '../pages/melhores/melhores';
import{ DenunciadosPage } from '../pages/denunciados/denunciados';
//import{ SairPage } from '../pages/sair/sair';
import {MedicosPage} from '../pages/medicos/medicos';
import {LugaresPage} from '../pages/lugares/lugares';
import {CadastromPage} from '../pages/cadastrom/cadastrom';
import {CadastrolPage} from '../pages/cadastrol/cadastrol';
import {FiltromPage} from '../pages/filtrom/filtrom';
import {FiltrolPage} from '../pages/filtrol/filtrol';
import {PerfilsaudePage} from '../pages/perfilsaude/perfilsaude';
import {PerfillugarPage} from '../pages/perfillugar/perfillugar';

import { AuthenticationProvider } from '../providers/authentication/authentication';
import { DatabaseProvider } from '../providers/database/database';

import { ValuesPipe } from '../pipes/values';
import { CategoryFilterPipe } from '../pipes/category-filter';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    MenuPage,
    SobrePage,
    MelhoresPage,
    DenunciadosPage,
    //SairPage
    MedicosPage,
    LugaresPage,
    CadastromPage,
    CadastrolPage,
    FiltromPage,
    FiltrolPage,
    PerfilsaudePage,
    PerfillugarPage,
    ValuesPipe,
    CategoryFilterPipe
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    MenuPage,
    SobrePage,
    MelhoresPage,
    DenunciadosPage,
    //SairPage
    MedicosPage,
    LugaresPage,
    CadastromPage,
    CadastrolPage,
    FiltromPage,
    FiltrolPage,
    PerfilsaudePage,
    PerfillugarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
