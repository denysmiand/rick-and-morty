type PageButtonProps = {
  page: number;
  className?: string;
  onClick: () => void;
};

export const PageButton = ({ page, className, onClick }: PageButtonProps) => {
  return (
    <div
      key={page}
      className={`size-8 border-2 cursor-pointer flex flex-row items-center justify-center leading-none hover:bg-neutral-200  ${
        className || ""
      }`}
      onClick={onClick}
    >
      <p>{page + 1}</p>
    </div>
  );
};
