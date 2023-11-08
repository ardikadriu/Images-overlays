const Title = () => {
  return (
    <div className="flex w-[100vw] justify-center first-letter">
      <div className="w-[1160px] flex justify-between mt-[30px]">
        <div>
          <h1 className="text-[white] font-abc text-[25px]">mendio</h1>
        </div>
        <div className="flex items-center text-white text-[13px] font-abc">
          <h3 className="ml-[30px]">Product</h3>
          <h3 className="ml-[30px]">Product</h3>
          <h3 className="ml-[30px]">Product</h3>
          <h3>Product</h3>
          <button className="ml-[30px] w-[94px] h-[34px] bg-[#ffffff3d] rounded-[200px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
