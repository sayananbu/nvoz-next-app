import { AnimationVariant } from './types';

import FamilyIcon from 'public/icons/family.svg';
import HouseIcon from 'public/icons/house-icon.svg';
import KeysIcon from 'public/icons/house-keys-icon.svg';
import SecurityIcon from 'public/icons/security.svg';

export const iconsMap: Record<AnimationVariant, string> = {
  family: FamilyIcon.src,
  keys: KeysIcon.src,
  house: HouseIcon.src,
  security: SecurityIcon.src,
};
