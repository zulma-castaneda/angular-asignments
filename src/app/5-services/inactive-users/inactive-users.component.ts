import {Component,  OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit{
users: string[];
constructor(private userService:UsersService) {
}
ngOnInit() {
  this.users = this.userService.inactiveUsers
}

  onSetToActive(id: number) {
    this.userService.setToActive(id)

  }
}
