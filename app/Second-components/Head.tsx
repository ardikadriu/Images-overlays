import React from "react";

const Head = () => {
  return (
    <header className="flex font-abc h-34px text-white w-[1240px] justify-between">
      <div className="mt-[30px] ">
        <h1 className="text-[25px]">mendio</h1>
      </div>
      <div className="flex mt-[30px] items-center">
        <h4>Product</h4>
        <h4 className="ml-[30px]">Features</h4>
        <h4 className="ml-[30px]">Pricing</h4>
        <h4 className="ml-[30px]">Blog</h4>

        <div className="ml-[30px] w-[94px] h-[34px] bg-[#ffffff3d] rounded-[200px] items-center flex justify-center ">
          <h2>Sign Up</h2>
        </div>
      </div>
    </header>
  );
};

export default Head;
