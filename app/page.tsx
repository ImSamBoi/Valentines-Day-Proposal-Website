"use client";

import Image from "next/image";
import { useState } from "react";
import Gif1 from "@/public/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";
import Gif2 from "@/public/bear-kiss-bear-kisses.gif";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [size, setSize] = useState(1);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center">
      {accepted ? (
        <>
          <Image src={Gif2} alt="Brown bear kissing white bear" />
          <p className="text-4xl font-medium select-none text-center">
            Yayy thank you! I <span className="text-red-500">love</span> you!
          </p>
        </>
      ) : (
        <>
          <Image
            className="select-none pointer-events-none"
            src={Gif1}
            alt="Bear with flowers"
          />
          <p className="text-4xl font-medium select-none text-center">
            Will you be my <span className="text-red-500">Valentines</span>?
          </p>
          <div className="flex flex-row items-center justify-center space-x-4 mt-2">
            <div
              className="select-none bg-black text-white px-6 py-2 rounded-xl cursor-pointer text-xl"
              onClick={() => setSize(size * 1.1)}
            >
              No
            </div>
            <div
              className="select-none bg-red-500 text-white rounded-xl cursor-pointer transition-all"
              style={{
                fontSize: 20 * size,
                paddingBlock: 8 * size,
                paddingInline: 24 * size,
              }}
              onClick={() => setAccepted(true)}
            >
              Yes
            </div>
          </div>
        </>
      )}
    </div>
  );
}
