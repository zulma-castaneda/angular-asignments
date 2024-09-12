import {Component, OnInit, } from '@angular/core';
import {UsersService} from "../users.service";
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit{

users: string[];

  constructor(private userService:UsersService) {
  }

  ngOnInit(): void {
  this.users = this.userService.activeUsers
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
