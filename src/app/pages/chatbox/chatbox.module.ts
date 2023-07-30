import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatboxRoutingModule } from './chatbox-routing.module';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { UserComponent } from './user/user.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChatComponent } from './chat/chat.component';
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
    MatInputModule
  ]
})
export class ChatboxModule { }
