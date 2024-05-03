export const Footer = () => {
  return (
    <div className="z-20 px-10 py-3 bg-gray-50 shadow-around flex flex-row mt-auto justify-evenly gap-3 ">
      <div className="flex flex-col text-center justify-between">
        <h3 className="font-bold">{"Basic info"}</h3>
        <p>{"Name: Denys"}</p>
        <p>{"Surname: Miand"}</p>
        <p>
          {"Github: "}
          <a
            href="https://github.com/Denismyand"
            target="_blank"
            className="text-blue-600	"
          >
            {"Denismyand"}
          </a>
        </p>
      </div>
      <div className="max-w-40 flex flex-col text-center justify-center ">
        <h3 className="font-bold">{"Tech stack"}</h3>
        <p>{"Next.Js, React, Tailwind, TypeScript, Axios, Graphql"}</p>
        <p>
          {"API: "}
          <a
            href="https://rickandmortyapi.com/api"
            target="_blank"
            className="text-blue-600	"
          >
            {"Click"}
          </a>
        </p>
      </div>
    </div>
  );
};
