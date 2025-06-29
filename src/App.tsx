import './output.css';
import { MouseEvent, useEffect, useState } from 'react';
import { bookdata } from './bookdata';
import { shelf } from './components/shelf';

export function App() {
  const [books, setBooks] = useState<Book[]>(bookdata);
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  // const [read, setRead] = useState<boolean>(false);
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [unreadBooks, setUnreadBooks] = useState<Book[]>([]);

  type Book = { id: number; title: string; author: string; read: boolean };

  const addBook = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    if (!title || !author) return alert('Please enter title and author.');
    e.preventDefault();

    setBooks([
      {
        id: books.length + 1,
        title,
        author,
        read: false,
      },
      ...books,
    ]);
  };

  const markRead = (bookId: number) => {
    const book: Book | undefined = books.find((x) => x.id === bookId);
    if (book) book.read = !book.read;
    sortBooks(books);
  };

  const sortBooks = (books: Book[]) => {
    setReadBooks(books.filter((book) => book.read === true));
    setUnreadBooks(books.filter((book) => book.read === false));
  };

  useEffect(() => {
    sortBooks(books);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  return (
    <div className='bg-slate-700 min-h-screen'>
      <div>
        <h1 className='font-bold text-4xl text-center text-gray-200 pt-6'>
          BooksBooksBooks
        </h1>
        {shelf('')}
        <div className='flex my-2'>
          <div className='flex mx-auto'>
            <form className='space-x-2 flex'>
              <input
                type='text'
                name='title'
                className='border-2 bg-gray-100 rounded-sm px-2'
                placeholder='title'
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type='text'
                name='author'
                className='border-2 bg-gray-100 rounded-sm px-2'
                placeholder='author'
                onChange={(e) => setAuthor(e.target.value)}
              />
              {/* <div className='flex items-center gap-x-2'>
                <input
                  type='checkbox'
                  name='read'
                  className='border-2'
                  onChange={() => setRead(!read)}
                />
                <p>read?</p>
              </div> */}
              <button
                className='rounded-md text-gray-100 bg-stone-800 hover:cursor-pointer py-2 px-4 border border-transparent text-center text-sm text-s transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'
                onClick={(e) => addBook(e)}
              >
                Add Book
              </button>
            </form>
          </div>
        </div>

        {readBooks.length > 0 && (
          <>
            {shelf('read')}
            <div className='grid grid-cols-4 mt-4 max-w-5xl gap-4 mx-auto'>
              {readBooks.map((book) => (
                <>
                  <div
                    key={book.id}
                    className='relative h-[350px] border w-full bg-gray-200 bg-[radial-gradient(#525252_1px,transparent_1px)] [background-size:16px_16px] z-0 drop-shadow-2xl drop-shadow-gray-800'
                  >
                    <span className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 font-gilroy z-0'>
                      <div className='mt-6 border border-dashed text-center bg-gray-100/85 p-4'>
                        <h2 className='font-bold text-4xl'>{book.title}</h2>
                        <p className='text-xl'>{book.author}</p>
                      </div>
                    </span>
                    <button
                      className='absolute right-2 bottom-2 rounded-md text-gray-100 bg-stone-800 hover:cursor-pointer py-2 px-4 border border-transparent text-center text-sm text-s transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                      onClick={() => markRead(book.id)}
                    >
                      Mark unread.
                    </button>
                  </div>
                </>
              ))}
            </div>
          </>
        )}

        {unreadBooks.length > 0 && (
          <>
            {shelf('unread')}
            <div className='grid grid-cols-4 mt-4 max-w-5xl gap-4 mx-auto'>
              {unreadBooks.map((book) => (
                <div
                  key={book.id}
                  className='relative h-[350px] border w-full bg-gray-200 bg-[radial-gradient(#525252_1px,transparent_1px)] [background-size:16px_16px] drop-shadow-2xl drop-shadow-gray-800'
                >
                  <span className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 font-gilroy'>
                    <div className='mt-6 border border-dashed text-center bg-gray-100/85 p-4'>
                      <h2 className='font-bold text-4xl'>{book.title}</h2>
                      <p className='text-xl'>{book.author}</p>
                    </div>
                  </span>
                  <button
                    className='absolute bottom-2 right-2 rounded-md text-gray-100 bg-stone-800 hover:cursor-pointer py-2 px-4 border border-transparent text-center text-sm text-s transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                    onClick={() => markRead(book.id)}
                  >
                    Mark read.
                  </button>
                </div>
              ))}
            </div>
            {shelf('')}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
