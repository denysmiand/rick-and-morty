import { PageButton } from "./page-button";

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

  const isShowingFirsButton = currentPage > 3;
  const isShowingLastButton = currentPage < pages.length - 2;
  const isShowingThreeDots = currentPage > 4 || currentPage < pages.length - 3;

  function generateThreeDots() {
    return <p className="relative top-[10px]">{"..."}</p>;
  }

  const generateClosestPages = () => {
    return pages.map((page) => {
      if (!(Math.abs(currentPage - (page + 1)) <= 2)) return;
      return (
        <PageButton
          key={page}
          page={page}
          className={currentPage === page + 1 ? "bg-neutral-300" : ""}
          onClick={() => {
            setPageEvent(page + 1);
          }}
        />
      );
    });
  };

  return (
    <div className="py-5 flex flex-row  justify-end gap-3 mob:justify-center mob:gap-2">
      {isShowingFirsButton && (
        <>
          <PageButton
            page={0}
            onClick={() => {
              setPageEvent(1);
            }}
          />

          {isShowingThreeDots && generateThreeDots()}
        </>
      )}
      {generateClosestPages()}

      {isShowingLastButton && (
        <>
          {isShowingThreeDots && generateThreeDots()}
          <PageButton
            page={pages.length - 1}
            onClick={() => {
              setPageEvent(pages.length);
            }}
          />
        </>
      )}
    </div>
  );
};
