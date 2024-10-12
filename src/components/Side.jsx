
function Side() {
  return (
    <div className="relative h-screen w-screen flex justify-between">
      <div className="flex flex-col fixed left-0 bottom-0 items-center space-y-4 mb-8">
      
        <hr className="w-px h-60 bg-gray-600 ml-10" />
      </div>
      

      <div className="flex flex-col fixed right-0 bottom-0 items-center space-y-4 mb-8">
 
        <hr className="w-px h-60 bg-gray-600 mr-10" />
      </div>
    </div>
  );
}

export default Side;
