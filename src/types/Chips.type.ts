import { HTMLAttributes, ReactElement } from 'react';

export enum EChipsPropsActiveView {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum EChipsPropsSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
}

export enum EChipsStatus {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  SYSTEM = 'system',
}

export type ChipsPropOnItemClick = (value: string) => void;
export declare type ChipsPropItemOnRightIconClick = (value: string) => void;

export type TChipsItemProps = {
  label: string;
  value: string;
  onRightIconClick?: (item: TChipsItemProps) => void;
  IconLeft?: () => ReactElement;
  IconRight?: (props: HTMLAttributes<Element>) => ReactElement;
  status?: EChipsStatus;
  active?: boolean;
};

export type TChipsProps = HTMLAttributes<HTMLDivElement> & {
  items: TChipsItemProps[];
  size?: EChipsPropsSize;
  activeView?: EChipsPropsActiveView;
  interactive?: boolean;
  onItemClick?: ChipsPropOnItemClick;
  onItemRightIconClick?: ChipsPropItemOnRightIconClick;
};
