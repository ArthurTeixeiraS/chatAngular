import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('chatBody') private chatBody!: ElementRef;

  messages: any[] = [
    { sender: 'attendant', text: 'Como posso ajudar você hoje?' }
  ];

  newMessage: string = '';

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'user',
        text: this.newMessage
      });
      this.newMessage = '';
    }
  }

  private scrollToBottom(): void {
    try {
      this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
