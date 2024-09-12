import { Component } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-wrapper-services',
  templateUrl: './wrapper-services.component.html',
  styleUrl: './wrapper-services.component.css',
  providers: [UsersService]
})
export class WrapperServicesComponent {

}
