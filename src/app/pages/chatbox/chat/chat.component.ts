import { Component, Input } from '@angular/core';
import { Userin4Service } from '../services/userservice.service';
import { Friendship } from 'src/models/friendship';
import { MessageService } from '../services/message.service';
import { user } from '@angular/fire/auth';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  friendship : Friendship | null = null

@Input() set _friendship(friendship : Friendship | null){

  this.friendship = friendship;
  this.messageService.listenMessages(friendship?.conversationId??'')
  console.log(friendship)
}
myEmail = ''
constructor(
  private userService : Userin4Service,
  public messageService : MessageService
){
  this.userService.userin4.subscribe((user) =>{
    this.myEmail = user?.email ?? ''
    console.log(messageService.messages)
  })

}
}
