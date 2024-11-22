import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTACTComponent } from './CONTACT/CONTACT.component';
import { HOMEComponent } from './HOME/HOME.component';
import { LOGINComponent } from './LOGIN/LOGIN.component';
import { PRODUCTComponent } from './PRODUCT/PRODUCT.component';
import { REGITERComponent } from './REGITER/REGITER.component';
import { SERVICEComponent } from './SERVICE/SERVICE.component';

const routes: Routes = [
  {
    path:'Home',
    component:HOMEComponent
    },
    {
      path:'Product',
      component:PRODUCTComponent
      },
      {
        path:'Contact',
        component:CONTACTComponent
        },
        {
          path:'Service',
          component:SERVICEComponent
          },
          {
            path:'Login',
            component:LOGINComponent
            },

            {path:'Register',
            component:REGITERComponent
            },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
