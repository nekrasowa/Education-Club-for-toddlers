export const navNames = {
  CHILDREN_EDUCATION: 'Children Education',
  BOOK_A_CLASS: 'Book a class',
  CLASS_SCHEDULE: 'Class schedule',
  PROGRAMS: 'Programs',
  ABOUT: 'About',
  GALLERY: 'Gallery',
  CONTACT: 'Contact',
} as const

export type NavKey = keyof typeof navNames;
