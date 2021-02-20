import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {OneComponent} from './first/one/one.component';
import {TwoComponent} from './first/two/two.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent, children: [
      { path: 'one', component: OneComponent },
      { path: 'two', component: TwoComponent },
    ]},
  { path: 'first/:id', component: FirstComponent},
  { path: 'second', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
