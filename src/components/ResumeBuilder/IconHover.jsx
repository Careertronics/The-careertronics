function IconHover({ icon: Icon }) {
    return (
      <div className="w-auto h-auto group">
        <div className="relative w-[157px] h-[157px] rounded-full bg-slate-50 transition-all duration-700 delay-300 ease-in-out group-hover:bg-red-100">
          <div className="absolute w-[145px] h-[145px] rounded-full bg-slate-50 transition-all duration-500 ease-in-out group-hover:bg-red-200 top-1/2 left-1/2 delay-200 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-[133px] h-[133px] rounded-full bg-gray-100 top-1/2 left-1/2 delay-100 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:bg-red-300">
              <div className="absolute w-[120px] h-[120px] rounded-full bg-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:bg-red-400">
                <div className="absolute w-[103px] h-[103px] rounded-full bg-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-in-out group-hover:bg-red-500">
                  <div className="shadow-md absolute w-[89px] h-[89px] rounded-full bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:bg-red-600">
                    <div className="absolute w-[35px] h-[35px] rounded-full bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:bg-red-600">
                      <Icon className="w-full h-full stroke-red-600 group-hover:stroke-white group-hover:fill-red-600 transition-all duration-200 ease-in-out" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default IconHover;