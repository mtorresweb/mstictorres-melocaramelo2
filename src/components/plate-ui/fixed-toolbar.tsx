'use client';

import { withCn } from '@udecode/cn';

import { Toolbar } from './toolbar';

export const FixedToolbar = withCn(
  Toolbar,
  'sticky left-0 top-2 z-20 w-full justify-between bg-background/95 p-1 backdrop-blur scrollbar-hide rounded-lg w-[98%] mx-auto shadow-lg',
);
