import React from 'react';

export default function Background() {
  return (
    <div tw="flex">
      <div tw="absolute inset-0 bg-zinc-900" style={{ opacity: 0.1 }} />
      <div tw="absolute top-[30px] left-[30px] w-6 h-6 border-t border-l border-zinc-800 flex" />
      <div tw="absolute top-[30px] right-[30px] w-6 h-6 border-t border-r border-zinc-800 flex" />
      <div tw="absolute bottom-[30px] left-[30px] w-6 h-6 border-b border-l border-zinc-800 flex" />
      <div tw="absolute bottom-[30px] right-[30px] w-6 h-6 border-b border-r border-zinc-800 flex" />
    </div>
  );
}
