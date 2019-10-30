import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-animations1',
  templateUrl: './animations1.component.html',
  styleUrls: ['./animations1.component.css'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })
      ),
      transition('normal <=> highlighted', animate(300))
      // transition('highlighted => normal', animate(600))
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)'
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)'
        })
      ),
      state(
        'shrunken',
        style({
          'background-color': 'green',
          transform: 'translateX(0px) scale(0.5)'
        })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(600)),
      transition('* <=> shrunken', [
        style({
          'background-color': 'orange'
        }),
        animate(
          1000,
          style({
            borderRadius: '50px'
          })
        ),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-10px)'
        }),
        animate(600)
      ]),
      transition('* => void', [
        animate(
          600,
          style({
            opacity: 0,
            transform: 'translateX(100px)'
          })
        )
      ])
    ]),
    trigger('list2', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        animate(
          1000,
          keyframes([
            style({
              transform: 'translateX(20px)',
              opacity: 0,
              offset: 0
            }),
            style({
              transform: 'translateX(10px)',
              opacity: 0.5,
              offset: 0.3
            }),
            style({
              transform: 'translateX(5px)',
              opacity: 1,
              offset: 0.8
            }),
            style({
              transform: 'translateX(0px)',
              opacity: 1,
              offset: 1
            })
          ])
        )
      ]),
      transition('* => void', [
        group([
          animate(
            100,
            style({
              color: 'red'
            })
          ),
          animate(
            600,
            style({
              opacity: 0,
              transform: 'translateX(100px)'
            })
          )
        ])
      ])
    ])
  ]
})
export class Animations1Component {
  animState = 'normal';
  wildAnimState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.animState.match('normal')
      ? (this.animState = 'highlighted')
      : (this.animState = 'normal');
    this.wildAnimState.match('normal')
      ? (this.wildAnimState = 'highlighted')
      : (this.wildAnimState = 'normal');
  }

  onShrink() {
    this.wildAnimState = 'shrunken';
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }
}
