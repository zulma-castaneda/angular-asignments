import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./6-routes/home/home.component";
import {UsersComponent} from "./6-routes/users/users.component";
import {UserComponent} from "./6-routes/users/user/user.component";
import {ServersComponent} from "./6-routes/servers/servers.component";
import {ServerComponent} from "./6-routes/servers/server/server.component";
import {EditServerComponent} from "./6-routes/servers/edit-server/edit-server.component";
import {ErrorPageComponent} from "./6-routes/error-page/error-page.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users', component: UsersComponent, children: [{path:':id/:name', component:UserComponent}]},
  {path: 'servers',
  component:ServersComponent, children: [{path: ':id', component: ServerComponent}, {path: ':id/edit', component: EditServerComponent}]},
  {path: 'not-found', component:ErrorPageComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
