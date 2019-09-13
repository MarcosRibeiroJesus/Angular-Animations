import { trigger, state, transition, style, animate, keyframes, useAnimation, animation, group, query, stagger, animateChild } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate('0.6s ease-out', keyframes([
    style({
      offset: .2,
      transform: 'translateX(-20px)'
    }),
    style({
      offset: 1,
      opacity: 0,
      transform: 'translateX(100%  )'
    })
  ])));

export let slide = trigger('slide', [
  transition(':enter', [
    animate(500, style({ transform: 'translateX(-20px)' })),
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);

export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration }} {{ easing }}')
], {
    params: {
      duration: '2s',
      easing: 'ease-out'
    }
  });

export let fadeOutAnimation = animation([
  animate('{{ duration }}', style({ opacity: 0 }))
], {
    params: {
      duration: '2s',
    }
  });

export let fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', useAnimation(fadeOutAnimation)),
]);

export const expandCollapse = trigger('expandCollapse', [
  state('collapsed' , style({
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0,
  })),

  state('expanded', style({
    height: '*',
    padding: '*',
    overflow: 'auto'
  })),

  transition('collapsed => expanded', [
    animate('300ms ease-out', style({
      height: '*',
      paddingTop: '*',
      paddingBottom: '*'
    })),
    animate('1s', style({ opacity: 1 }))
  ]),

  transition('expanded => collapsed', [
    animate('300ms ease-in')
  ])
]);

export const todosAnimation = trigger('todosAnimation', [

  transition(':enter', [
    group([

      query('svg', [
        style({ transform: 'translateY(1000px)' }),
        animate(1200)
      ]),

      query('@fade',
        stagger(200, animateChild())),
    ])
  ])
]);

export const todoAnimation = trigger('todoAnimation', [

  transition(':enter', [
    useAnimation(fadeInAnimation, {
      params: {
        duration: '0.5s'
      }
    })
  ]),

  transition(':leave', [
    style({ backgroundColor: 'red' }),
    animate(1500),
    useAnimation(bounceOutLeftAnimation)
  ]),
]);
