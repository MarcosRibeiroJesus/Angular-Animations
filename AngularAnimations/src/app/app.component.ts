import { Component, Input, OnInit } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation, expandCollapse, todosAnimation, todoAnimation } from './animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fade,
    slide,
    expandCollapse,
    todosAnimation,
    todoAnimation
  ]
})
export class AppComponent {
  @Input() code: string;
  isExpanded: boolean;

  title = 'Angular Animations';

  items: any[] = [
    'Cook the Cake',
    'Arrest the President',
    'Wash the dishes',
  ];

  // Todo
  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  // Zip
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
