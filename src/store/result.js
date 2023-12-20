'use client';

import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'legoResultPersist',
  storage: sessionStorage,
});

export const legoResult = atom({
  key: 'legoResult',
  default:
    typeof window !== 'undefined'
      ? {
          class_name: '',
          confidence: '',
          name: '',
          url: '',
          image: '',
        }
      : undefined,
  effects_UNSTABLE: [persistAtom],
});
