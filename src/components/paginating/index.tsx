type PaginatingProps = {
  currentPage: number;
  pagesQty: number;
  setPageEvent: (page: number) => void;
};

export const Paginating = ({
  currentPage,
  pagesQty,
  setPageEvent,
}: PaginatingProps) => {
  const pages = Array.from({ length: pagesQty }, (_, index) => index);

  const generateClosestPages = () => {
    {
      return pages.map((page) => {
        if (Math.abs(currentPage - (page + 1)) <= 2) {
          return (
            <div
              key={page}
              className={`size-8 border-2 cursor-pointer flex flex-row items-center justify-center leading-none hover:bg-neutral-200  ${
                currentPage === page + 1 && "bg-neutral-300"
              }`}
              onClick={() => {
                setPageEvent(page + 1);
              }}
            >
              <p>{page + 1}</p>
            </div>
          );
        }
      });
    }
  };

  return (
    <div className="py-5 flex flex-row  justify-end gap-3">
      {currentPage > 3 && (
        <>
          <div
            className={`size-8 border-2 cursor-pointer flex flex-row items-center justify-center leading-none hover:bg-neutral-200  `}
            onClick={() => {
              setPageEvent(1);
            }}
          >
            <p>{1}</p>
          </div>
          {currentPage > 4 && <p className="relative top-[10px]">{"..."}</p>}
        </>
      )}
      {generateClosestPages()}

      {currentPage < pages.length - 2 && (
        <>
          {currentPage < pages.length - 3 && (
            <p className="relative top-[10px]">{"..."}</p>
          )}
          <div
            className={`size-8 border-2 cursor-pointer flex flex-row items-center justify-center leading-none hover:bg-neutral-200  `}
            onClick={() => {
              setPageEvent(pages.length);
            }}
          >
            <p>{pages.length}</p>
          </div>
        </>
      )}
    </div>
  );
};
