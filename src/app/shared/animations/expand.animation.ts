import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expandableItem = [
  trigger('expandableItem', [
    state(
      'expanded',
      style({
        height: '*',
        overflow: 'hidden',
      })
    ),
    state(
      'collapsed',
      style({
        height: '0',
        overflow: 'hidden',
      })
    ),
    transition('collapsed => expanded', [
      style({ height: '0' }),
      animate('250ms ease-in', style({ height: '*' })),
    ]),
    transition('expanded => collapsed', [
      style({ height: '*' }),
      animate('250ms ease-out', style({ height: '0' })),
    ]),
  ]),
];
