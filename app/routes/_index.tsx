import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="relative bg-black max-w-md mx-auto px-2 py-2">
      <header>
        <div className="max-w-md mx-auto text-center flex items-center justify-between">
          <img className="w-4 h-4 object-cover" src="serch.png" alt="" />

          <div className="flex items-center">
            <img className="w-5 h-5 object-cover" src="p.png" alt="" />
            <p className="text-white font-bold ml-1">310 +</p>
          </div>

          <img className="w-4 h-4 object-cover" src="time.png" alt="" />
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="flex justify-between mt-4">
          <p className="text-white text-xs font-bold">いますぐ通話可能なお相手 画面遷移前の画面</p>
          <button onClick={handleClick}>
            <p className="text-purple-400 text-xs font-bold">更新する</p>
          </button>
        </div>

        <div className="mt-1 flex">
          <div className="text-center inline-block">
            <img className="w-16 h-16 object-cover rounded-full pointer-events-none" src="neko.jpg" alt="" />
            <p className="text-white">neko</p>
          </div>

          <div className="text-center inline-block ml-3 flex-none">
            <img className="w-16 h-16 object-cover rounded-full pointer-events-none" src="neko.jpg" alt="" />
            <p className="text-white">neko</p>
          </div>

          <div className="text-center inline-block ml-3 flex-none">
            <img className="w-16 h-16 object-cover rounded-full pointer-events-none" src="neko.jpg" alt="" />
            <p className="text-white">neko</p>
          </div>

          <div className="text-center inline-block ml-3 flex-none">
            <img className="w-16 h-16 object-cover rounded-full pointer-events-none" src="neko.jpg" alt="" />
            <p className="text-white">neko</p>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
          <div className="w-full h-44 relative inline-block">
            <img className="w-full h-44 object-cover rounded-lg" src="neko.jpg" alt="" />
            <div className="absolute bottom-0 rounded-b-lg bg-gray-600 bg-opacity-50 w-full">
              <div className="flex justify-between items-center p-1">
                <p className="bg-green-500 bg-opacity-50 p-0.5 rounded-full text-xs text-white">オンライン</p>

                <div className="flex">
                  <img className="w-5 h-5 object-cover" src="call.png" alt="" />
                  <img className="w-6 h-6 object-cover ml-1" src="video.png" alt="" />
                </div>
              </div>
              <p className="text-white text-sm p-1">のん(24)</p>
            </div>
          </div>
        </div>
      </main>

      <div className="sticky max-w-md mx-auto bottom-0 -translate-y-20 right-0 z-50 ml-52 justify-end">
        <div className="bg-red-500 flex items-center py-2 px-1.5 w-20 rounded-full">
          <p className="text-white text-xs flex-1 font-bold">今すぐ通話</p>
        </div>

        <div className="bg-purple-500 flex items-center py-2 px-1 w-20 rounded-full my-3">
          <p className="text-white text-xs flex-1 font-bold">通話待機する</p>
        </div>
        <Link to="/page">Aboutページへ</Link>
      </div>
    </div>
  );
}