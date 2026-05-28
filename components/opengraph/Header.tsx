import React from 'react'
import Logo from '../Logo';

export default function Header() {
  return (
    <div tw="flex items-center justify-between w-full border-b border-zinc-900 pb-6 mb-4">
      <div tw="flex items-center">
        <Logo width={36} height={36} />

      </div>
      <div tw="flex items-center bg-[#18181b] border border-[#27272a] px-3.5 py-1.5 rounded-sm">
        <span tw="w-1.5 h-1.5 bg-[#2883ff] rounded-full mr-2" />
        <span tw="font-mono text-[10px] text-zinc-300 font-bold tracking-widest uppercase">
          rajeevpuri.com.np
        </span>
      </div>
    </div>
  );
}
