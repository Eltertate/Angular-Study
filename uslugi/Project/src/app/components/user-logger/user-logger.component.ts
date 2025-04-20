import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-logger',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-logger.component.html',
  styleUrl: './user-logger.component.css'
})
export class UserLoggerComponent {
  message: string = '';

  constructor(public logger: LoggerService) {}

  addLog(){
    if(this.message.trim()){
      this.logger.log(this.message);
      this.message = '';
    }
  }

}
