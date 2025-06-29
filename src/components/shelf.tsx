export const shelf = (postIt: string): React.ReactNode => {
  return (
    <div className='relative z-19'>
      <hr className='border-8 border-slate-900 drop-shadow-2xl drop-shadow-neutral-900' />
      {postIt && (
        <div
          className={`absolute -top-2 left-20 w-28 h-28 z-20 -rotate-16 ${
            postIt === 'read' ? 'bg-green-400' : 'bg-red-400'
          }`}
        >
          <div className='absolute top-1/3 -translate-x-1/2 left-1/2 -translate-y-1/3'>
            <p className='font-bold text-xl'>{postIt.toUpperCase()}</p>
          </div>
        </div>
      )}
    </div>
  );
};
