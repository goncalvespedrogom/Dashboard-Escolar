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
    <div className="bg-[#F7F8FA] flex justify-center">
      <div className="flex flex-col mt-10 h-screen max-w-4xl px-0 py-4">
        <div className="container mx-auto px-6 py-4 bg-[#195383] flex max-w-4xl text-white rounded-xl justify-end">
          <p className="text-7xl">
            Bem-vindo ao projeto de
            <p className="text-7xl text-end">dashboard escolar</p>
          </p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-400 mt-5">
            Projeto ainda em desenvolvimento
            <ButtonLink
              href="/dashboard/admin"
              className="bg-[#195383] hover:opacity-90 py-2 px-4 rounded-lg text-white max-w-24 ml-5"
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
