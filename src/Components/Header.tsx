import { charactersLink, episodesLink, locationsLink } from "@/utils/constants";
import { usePathname } from "next/navigation";

const generateNavStyles = (path: string, link: string) => {
  return `${
    path.includes(link) && "text-blue-600 border-b-2 border-blue-600"
  } px-5 py-3 `;
};

export const Header = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-row justify-center gap-5  text-black bg-gray-50">
      <a
        href={episodesLink}
        className={generateNavStyles(pathName, episodesLink)}
      >
        {"Episodes"}
      </a>
      <a
        href={charactersLink}
        className={generateNavStyles(pathName, charactersLink)}
      >
        {"Characters"}
      </a>
      <a
        href={locationsLink}
        className={generateNavStyles(pathName, locationsLink)}
      >
        {"Locations"}
      </a>
    </div>
  );
};
