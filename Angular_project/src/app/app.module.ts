import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './HOME/HOME.component';
import { PRODUCTComponent } from './PRODUCT/PRODUCT.component';
import { LOGINComponent } from './LOGIN/LOGIN.component';
import { CONTACTComponent } from './CONTACT/CONTACT.component';
import { SERVICEComponent } from './SERVICE/SERVICE.component';
import { FormsModule } from '@angular/forms';
import { REGITERComponent } from './REGITER/REGITER.component';

@NgModule({
  declarations: [	
    AppComponent,
      HOMEComponent,
      PRODUCTComponent,
      LOGINComponent,
      CONTACTComponent,
      SERVICEComponent,
      REGITERComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
