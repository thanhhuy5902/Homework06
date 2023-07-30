import { Component, Input } from '@angular/core';
import { Friendship } from 'src/models/friendship';
import { Userin4Service } from '../services/userservice.service';
import { MessageService } from '../services/message.service';
import { Message } from 'src/models/message';
@Component({
  selector: 'app-chat-control',
  templateUrl: './chat-control.component.html',
  styleUrls: ['./chat-control.component.scss']
})
export class ChatControlComponent {
  message = '';
  @Input() friendship :Friendship | null = null;
  myEmail = '';
  constructor(
    private userService : Userin4Service,
    private messageService: MessageService
  ){
    this.userService.userin4.subscribe((user) =>{
      this.myEmail = user?.email ?? '';
    })
  }

  async send(){
    if(this.message == ''){
      return;
    }
    if(this.myEmail == ''){
      return
    }
    await this.messageService.send(this.friendship?.conversationId ?? '', <Message>
    {
      senderEmail: this.myEmail,
      content:this.message,
      timestamp:0,
      receiverEmail:this.friendship?.friendEmail?? '',
    })
 
  }
}
