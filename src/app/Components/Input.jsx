function Input({ placeholder }) {
  return (
    <div className="lg:w-[466px] lg:h-[56px] flex items-center my-4 justify-center">
      <input
        className="bg-[#919EAB14] w-full text-[16px] rounded-[8px] font-normal leading-5 text-white p-3 outline-none "
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
