import { RouterModule, Routes } from "@angular/router";

import { BasicsPageComponent } from "./pages/basicsPage/basicsPage.component";
import { NumbersPageComponent } from "./pages/numbersPage/numbersPage.component";
import { OrderComponent } from "./pages/order/order.component";
import { UncommonPageComponent } from "./pages/uncommonPage/uncommonPage.component";

 export const pagesRoutes: Routes = [
  {
    path: '',
    component: BasicsPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '*',
    redirectTo: ''
  },
];
