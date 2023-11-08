const Header = () => {
  return (
    <div className="flex w-[100vw] text-white font-abc justify-center  ]">
      <div className="flex justify-between w-[1160px]">
        <div className="mt-[30px] ">
          <h1 className="text-[25px]">mendio</h1>
        </div>
        <div className="flex mt-[30px] text-[13px] items-center font-semibold">
          <h2 className="mr-[30px]">Product</h2>
          <h2>Features</h2>
          <h2 className="ml-[30px]">Pricing</h2>
          <h2 className="ml-[30px]">Blog</h2>
          <button className="ml-[30px] w-[94px] h-[34px] bg-[#ffffff3d] rounded-[200px] items-center">
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
