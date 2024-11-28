const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Avisos</h1>
        <span className="text-xs text-gray-400">Ver tudo</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#195383] rounded-md p-4">
            <div className='flex items-center justify-between'>
                <h2 className="font-medium text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                <span className="text-xs text-black bg-white rounded-md px-1 py-1">02/12/2024</span>
            </div>
            <p className="text-xs text-gray-300 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem fugit incidunt quod doloremque aperiam quam.</p>
        </div>
        <div className="bg-[#195383cc] rounded-md p-4">
            <div className='flex items-center justify-between'>
                <h2 className="font-medium text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                <span className="text-xs text-black bg-white rounded-md px-1 py-1">02/12/2024</span>
            </div>
            <p className="text-xs text-gray-300 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem fugit incidunt quod doloremque aperiam quam.</p>
        </div>
        <div className="bg-[#195383] rounded-md p-4">
            <div className='flex items-center justify-between'>
                <h2 className="font-medium text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                <span className="text-xs text-black bg-white rounded-md px-1 py-1">02/12/2024</span>
            </div>
            <p className="text-xs text-gray-300 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem fugit incidunt quod doloremque aperiam quam.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
