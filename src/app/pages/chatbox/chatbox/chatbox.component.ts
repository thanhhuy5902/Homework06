import { Component, Input } from '@angular/core';
import { userin4 } from 'src/models/userin4';
import { Userin4Service } from '../services/userservice.service';
import { Router } from '@angular/router';
import { Friendship } from 'src/models/friendship';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent {
  friendship: Friendship | null = null;

 constructor (public userService: Userin4Service, public router : Router ){
  this.userService.userin4.subscribe((user) =>{
    if (user ==null){
      this.router.navigate(['./login'])
    }
  })
 }
 selectFriend($event: Friendship) {
  console.log($event);
  this.friendship = $event;
}
}
