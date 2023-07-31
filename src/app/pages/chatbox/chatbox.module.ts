import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { ChatboxRoutingModule } from './chatbox-routing.module';
import { ChatboxComponent } from './chat/chatbox.component';
import { UserComponent } from './user/user.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChatComponent } from './chatbox/chat.component';
import { ChatControlComponent } from './chat-control/chat-control.component';


@NgModule({
  declarations: [
    ChatboxComponent,
    UserComponent,
    FriendlistComponent,
    ChatComponent,
    ChatControlComponent
  ],
  imports: [
    CommonModule,
    ChatboxRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ChatboxModule { }
