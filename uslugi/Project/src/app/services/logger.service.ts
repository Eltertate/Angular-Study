import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logs: string[] = [];

  log(message: string): void {
    const timestamp = new Date().toLocaleString();
    this.logs.push(`[${timestamp}] ${message}`);
  }

  getLogs(): string[]{
    return this.logs;
  }
}
