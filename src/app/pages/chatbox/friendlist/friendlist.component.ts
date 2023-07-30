import { Component, Output, EventEmitter } from '@angular/core';
import {
  concatAll,
  concatMap,
  from,
  map,
  merge,
  mergeAll,
  mergeMap,
  of,
  scan,
  switchMap,
  take,
  toArray,
} from 'rxjs';
import { FriendshipService } from '../services/friendship.service';
import { Userin4Service } from '../services/userservice.service';
import { Friendship } from 'src/models/friendship';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.scss'],
})
export class FriendlistComponent {
  friendList: Array<Friendship> = [];

  @Output() selectedFriend: EventEmitter<Friendship> = new EventEmitter();
  constructor(
    public userService : Userin4Service,
    public friendshipService : FriendshipService
  ){
    this.userService.userin4.subscribe((user)=>{
      if(user == null){
        return;
      }
      this.friendshipService.getFriendList(user?.email ?? '')
    })

    this.friendshipService.friendList.subscribe((friendship) =>{
      if (friendship == null){
        return;
      }
      if(
        !this.friendList
        .map((f) => f.friendEmail)
        .includes(friendship.friendEmail)
      ){
        this.friendList.push(friendship)
        console.log(friendship)
        console.log(this.friendList)
      }
    })

  }
  
  chatWith(friendship: Friendship) {
    console.log(friendship);
    this.selectedFriend.emit(friendship);
  }
}
