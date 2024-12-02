import React from "react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

const HomePage = () => {
  return (
    <div className="flex justify-center bg-[#F7F8FA]">
      <div className="flex flex-col mt-10 h-screen max-w-64 px-0 py-4 /* responsivo */ lg:max-w-4xl">
        <div className="container mx-auto px-6 py-4 bg-[#195383] flex max-w-64 text-white rounded-xl justify-end /* responsivo */ lg:max-w-4xl">
          <p className="text-base lg:text-7xl">
            Bem-vindo ao projeto de
            <p className="text-base text-end /* responsivo */ lg:text-7xl">dashboard escolar</p>
          </p>
        </div>
        <div className="flex justify-end">
          <p className="mt-5 text-gray-400 flex items-center text-sm /* responsivo */  lg:text-base">
            Projeto ainda em desenvolvimento
            <ButtonLink
              href="/dashboard/admin"
              className="py-2 px-4 rounded-lg bg-[#195383] text-white max-w-24 ml-5 hover:opacity-90"
            >
              Acessar
            </ButtonLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
