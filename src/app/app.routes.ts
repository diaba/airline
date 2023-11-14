import { RouterModule, Routes } from '@angular/router';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';

const routeConfig: Routes = [
  {
    path: '',
    component: AirlinesListComponent,
    title: 'Home page',
  },
  { path: 'airlines', component: AirlinesListComponent },
];

export default routeConfig;
