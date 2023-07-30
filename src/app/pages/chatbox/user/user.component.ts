import { Component, Input, OnInit } from '@angular/core';
import { userin4 } from 'src/models/userin4';
import { Userin4Service } from '../services/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendshipService } from '../services/friendship.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
 @Input() userin4 : userin4 |null = {
  id:'1',
  name:'huy',
  email:'huy@gmail.com',
  imgUrl:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png'

 }
 constructor(
  public userService: Userin4Service,
  public friendshipService : FriendshipService,
 ){}

 emailForm!: FormGroup;
  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

 async addfriend(value : string){
  let yEmail = value
  if (yEmail) {
    if (this.userin4 == null) {
      return;
    }
    let result = await this.friendshipService.addFriendship(
      this.userin4!.email,
      yEmail
    );
    if (result) {
      alert('Add friend success');
    } else {
      alert('Add friend failed');
    }
  }
  console.log(yEmail)
 }
}
