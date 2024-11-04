import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div>
      This app is using Chrome (v{{ chrome }}), Node.js (v{{ node }}), and Electron (v{{ electron }})
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chrome: string = '';
  node: string = '';
  electron: string = '';

  ngOnInit() {
    this.chrome = (window as any).versions.chrome();
    this.node = (window as any).versions.node();
    this.electron = (window as any).versions.electron();
  }
}

