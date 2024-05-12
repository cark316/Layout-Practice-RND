import React from "react";

const Clue = () => {
  const navLinks = [
    { id: "/platform", name: "Platform" },
    { id: "/customers", name: "Customers" },
    { id: "/integrations", name: "Integrations" },
    { id: "/company", name: "Company" },
    { id: "/docs", name: "Docs" },
    { id: "/pricing", name: "Pricing" },
  ];
  return (
    <div className="bg-black h-svh w-svw absolute">
      <nav className="flex flex-row justify-between items-center px-4 py-3 mx-6 my-8 font-redditsans border border-[#262626] rounded-3xl bg-[#141414]">
        <h1 className="text-xl font-bold text-white">clue.io</h1>
        <ul className="flex flex-row gap-12 text-white">
          {navLinks.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <button className="font-bold border rounded-xl px-6 py-3 bg-white">
          Sign in
        </button>
      </nav>
      <div className="flex flex-row justify-center items-center font-redditsans mx-48 my-32 gap-32">
        <p className="text-[172px]/[172px] text-white text-gradient-2">
          NEVER LOSE YOUR SECRETS
        </p>
        <div className="flex flex-col gap-12 mt-20">
          <p className="text-[22px]/[44px] text-white">
            A cloud-based API that helps you manage secrets and configuration,
            giving your team peace of mind.
          </p>
          <div className="flex flex-row gap-4 text-xl">
            <button className="font-bold rounded-xl px-6 py-4 bg-green-400">
              Get Started
            </button>
            <button className="font-bold rounded-xl px-6 py-4 bg-blue-400">
              Talk with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clue;
