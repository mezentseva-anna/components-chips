import React, { HTMLAttributes } from 'react';
import { storiesOf } from '@storybook/react';
import {
  EChipsPropsActiveView,
  EChipsPropsSize,
  EChipsStatus,
  TChipsItemProps,
} from '../../types';
import Chips from './Chips';

const CrossIcon = (props: HTMLAttributes<Element>) => {
  return (
    <svg
      {...props}
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.2197 4.19531L4.19531 11.2197'
        stroke='#95A3AB'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.19531 4.19531L11.2197 11.2197'
        stroke='#95A3AB'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const SuccessIcon = (props: HTMLAttributes<Element>) => {
  return (
    <svg
      width='15'
      height='15'
      {...props}
      viewBox='0 0 72 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_6424_104694)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M35.999 71.5067C55.6095 71.5067 71.5059 55.6101 71.5059 35.9995C71.5059 16.3888 55.6095 0.492188 35.999 0.492188C16.3886 0.492188 0.492188 16.3888 0.492188 35.9995C0.492188 55.6101 16.3886 71.5067 35.999 71.5067ZM55.0698 24.7614C55.2359 24.5903 55.3658 24.3875 55.4518 24.165C55.5378 23.9426 55.5781 23.7051 55.5703 23.4667C55.5625 23.2284 55.5067 22.994 55.4064 22.7777C55.306 22.5613 55.1631 22.3674 54.9861 22.2076C54.8092 22.0477 54.6018 21.9251 54.3765 21.8471C54.1511 21.7691 53.9123 21.7373 53.6744 21.7536C53.4365 21.77 53.2043 21.834 52.9917 21.9421C52.7791 22.0501 52.5904 22.1999 52.4369 22.3824L31.1701 45.8829L19.4706 34.7141C19.1302 34.3887 18.6744 34.2119 18.2037 34.2226C17.7329 34.2332 17.2856 34.4305 16.9603 34.7709C16.6349 35.1113 16.4581 35.5671 16.4688 36.0379C16.4794 36.5086 16.6767 36.9559 17.0171 37.2813L30.0374 49.7088L31.3565 50.9693L32.5797 49.6165L55.0698 24.7614Z'
          fill='#68AD45'
        />
      </g>
      <defs>
        <clipPath id='clip0_6424_104694'>
          <rect width='72' height='72' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

const items: TChipsItemProps[] = [
  {
    value: 'success',
    label: 'Согласован',
    IconLeft: () => <SuccessIcon />,
    active: true,
  },
  {
    value: 'waiting',
    label: 'Ожидает',
    status: EChipsStatus.SYSTEM,
    IconRight: (props) => <CrossIcon {...props} />,
  },
];

const Component = (args) => {
  return (
    <Chips
      {...args}
      onItemClick={(item) => alert('Clicked on an element with value = ' + item)}
      onItemRightIconClick={(item) =>
        alert('Clicked on the cross in the element with value = ' + item)
      }
    />
  );
};

storiesOf('Chips', module)
  .addParameters({
    component: Component,
    args: {
      items: items,
      size: EChipsPropsSize.S,
      activeView: EChipsPropsActiveView.PRIMARY,
    },
    argTypes: {
      size: {
        control: {
          type: 'radio',
          options: [EChipsPropsSize.XS, EChipsPropsSize.S, EChipsPropsSize.M, EChipsPropsSize.L],
        },
      },
      activeView: {
        control: {
          type: 'select',
          options: [EChipsPropsActiveView.PRIMARY, EChipsPropsActiveView.SECONDARY],
        },
      },
    },
  })
  .add('Default', (arg) => <Component {...arg} />)
  .add('Interactive', (arg) => <Component {...arg} interactive />);
