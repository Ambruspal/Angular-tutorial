import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
    constructor(public mesSer: MessageService) {}

    ngOnInit(): void {}
}
