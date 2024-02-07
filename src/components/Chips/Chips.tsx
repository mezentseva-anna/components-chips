import React, { memo } from 'react';
import classNames from 'classnames';
import {
  EChipsPropsActiveView,
  EChipsPropsSize,
  EChipsStatus,
  TChipsProps,
} from '../../types/Chips.type';
import './Chips.scss';

const Chips = ({
  items,
  onItemRightIconClick,
  onItemClick,
  interactive,
  size = EChipsPropsSize.M,
  activeView = EChipsPropsActiveView.PRIMARY,
  ...props
}: TChipsProps): JSX.Element => {
  return (
    <div {...props} className={classNames(props.className, 'container')}>
      {items?.length &&
        items.map(({ value, label, status, active, IconLeft, IconRight }) => (
          <div
            onClick={() => interactive && onItemClick?.(value)}
            className={classNames('chip', 'chipSize' + EChipsPropsSize[size], {
              chipInteractive: interactive,
              chipActive: active,
              chipActiveSecondary: active && activeView === EChipsPropsActiveView.SECONDARY,
              chipActivePrimary: active && activeView === EChipsPropsActiveView.PRIMARY,
            })}
            key={value}
          >
            {IconLeft && <IconLeft />}
            {status && (
              <div
                className={classNames('chipStatus', {
                  chipStatusSystem: status === EChipsStatus.SYSTEM,
                  chipStatusSuccess: status === EChipsStatus.SUCCESS,
                  chipStatusWarning: status === EChipsStatus.WARNING,
                  chipStatusError: status === EChipsStatus.ERROR,
                })}
              />
            )}
            {label}
            {IconRight && (
              <IconRight
                onClick={(event) => {
                  event.stopPropagation();
                  onItemRightIconClick?.(value);
                }}
                className={classNames('chipIcon', {
                  chipIconActive: onItemRightIconClick,
                })}
              />
            )}
          </div>
        ))}
    </div>
  );
};
export default memo(Chips);
