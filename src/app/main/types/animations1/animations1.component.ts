import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations1',
  templateUrl: './animations1.component.html',
  styleUrls: ['./animations1.component.css']
})
export class Animations1Component {
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

}
