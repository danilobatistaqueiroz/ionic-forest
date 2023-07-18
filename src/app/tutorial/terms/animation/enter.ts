// @ts-ignore
import { c as createAnimation } from 'node_modules/@ionic/core/components/animation.js';
//import {} from '@ionic/core/components/ion-modal.js';

// @ts-ignore
import {g as getElementRoot} from 'node_modules/@ionic/core/components/helpers.js';

export const mdEnterAnimation = (baseEl:any, opts:any) => {
  const root = getElementRoot(baseEl);
  const { wrapperAnimation, backdropAnimation } = createEnterAnimation();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelector('.modal-wrapper'));
  return createAnimation()
    .addElement(baseEl)
    .easing('ease-out')
    .duration(400)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

const createEnterAnimation = () => {
  const backdropAnimation = createAnimation()
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none',
  })
    .afterClearStyles(['pointer-events']);
  const wrapperAnimation = createAnimation().keyframes([
    { offset: 0, opacity: 0.01, transform: 'translateY(-250px)' },
    { offset: 1, opacity: 1, transform: `translateY(30px)` },
  ]);
  return { backdropAnimation, wrapperAnimation };
};
