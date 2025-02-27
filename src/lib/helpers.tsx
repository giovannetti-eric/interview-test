import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export default function classnames(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
