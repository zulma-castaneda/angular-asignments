import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './1-components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './1-components/success-alert/success-alert.component';
import { ComponentsWrapperComponent } from './1-components/components-wrapper/components-wrapper.component';
import { DatabindingWrapperComponent } from './2-databinding/databinding-wrapper/databinding-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesWrapperComponent } from './3-directives/directives-wrapper/directives-wrapper.component';
import { BindingWrapperComponent } from './4-binding/binding-wrapper/binding-wrapper.component';
import { GameControlComponent } from './4-binding/game-control/game-control.component';
import { OddComponent } from './4-binding/odd/odd.component';
import { EvenComponent } from './4-binding/even/even.component';
import { CustomWrapperComponent } from './4-1-custom-directives/custom-wrapper/custom-wrapper.component';
import { HighlightDirective } from './4-1-custom-directives/highlight.directive';
import { ActiveUsersComponent } from './5-services/active-users/active-users.component';
import { InactiveUsersComponent } from './5-services/inactive-users/inactive-users.component';
import { WrapperServicesComponent } from './5-services/wrapper-services/wrapper-services.component';
import { CounterService } from './5-services/counter.service';
import { RoutesWrapperComponent } from './6-routes/routes-wrapper/routes-wrapper.component';
import { HomeComponent } from './6-routes/home/home.component';
import { ServersComponent } from './6-routes/servers/servers.component';
import { UsersComponent } from './6-routes/users/users.component';
import { ServersService } from './6-routes/servers/servers.service';
import { UserComponent } from './6-routes/users/user/user.component';
import { EditServerComponent } from './6-routes/servers/edit-server/edit-server.component';
import { ServerComponent } from './6-routes/servers/server/server.component';
import { ErrorPageComponent } from './6-routes/error-page/error-page.component';
import { FormWrapperComponent } from './7-template-driven-forms/form-wrapper/form-wrapper.component';
import { ReactiveWrapperComponent } from './8-reactive-forms/reactive-wrapper/reactive-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ComponentsWrapperComponent,
    DatabindingWrapperComponent,
    DirectivesWrapperComponent,
    BindingWrapperComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    CustomWrapperComponent,
    HighlightDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    WrapperServicesComponent,
    RoutesWrapperComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent,
    FormWrapperComponent,
    ReactiveWrapperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CounterService, ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
