type Book = { id: number; title: string; author: string; read: boolean };

export const bookdata: Book[] = [
  { id: 1, title: 'Ulysses', author: 'James Joyce', read: true },
  {
    id: 2,
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    read: false,
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    read: false,
  },
  {
    id: 4,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    read: true,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
    read: true,
  },
];
