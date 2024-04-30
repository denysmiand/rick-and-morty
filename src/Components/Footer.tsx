export const Footer = () => {
  return (
    <div className="flex flex-row mt-auto justify-evenly gap-3 px-10 py-3 text-black bg-gray-50">
      <div className="flex flex-col text-center justify-center">
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
      <div className="flex flex-col text-center justify-center max-w-40">
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
