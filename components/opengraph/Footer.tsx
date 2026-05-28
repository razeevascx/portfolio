import React from 'react';

export default function Footer({ path = "/", activeStatus = "LIVE" }: { path?: string; activeStatus?: string }) {
  return (
    <div tw="flex items-center justify-between w-full border-t border-zinc-900 pt-6 mt-auto">
      <div tw="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/154011772?v=4"
          tw="w-14 h-14 rounded-lg mr-4 border border-zinc-800"
          style={{ objectFit: 'cover' }}
          alt="Avatar"
        />
        <div tw="flex flex-col">
          <span tw="text-white text-xl font-bold font-sans">
            Rajeev Puri
          </span>
          <span tw="text-zinc-500 text-xs font-mono uppercase tracking-wider mt-0.5">
            Wolverhampton, UK
          </span>
        </div>
      </div>
      <div tw="flex items-center flex-col items-end">
        <span tw="text-[#2883ff] text-sm font-bold tracking-widest uppercase flex">{`PATH // ${path.toUpperCase()}`}</span>
        <span tw="text-zinc-700 text-xs mt-0.5 flex">
          STATUS // {activeStatus}
        </span>
      </div>
    </div>
  );
}
