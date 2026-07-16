import { useEffect } from "react";
import { WarpBackground } from "@/components/warp-background";
import logo from "../assets/larg logog.png";

declare const fbq: (...args: unknown[]) => void;

const playStoreUrl = "https://play.google.com/store/apps/details?id=com.tarteeb.devtarteeb";

export default function App() {
  useEffect(() => {
    fbq("track", "ViewContent");
  }, []);

  return (
    <WarpBackground
      className="flex min-h-screen items-center justify-center rounded-none border-0 bg-[linear-gradient(135deg,#dc1f26_0%,#8b0000_100%)] p-5"
      perspective={140}
      beamsPerSide={4}
      beamSize={7}
      beamDelayMax={5}
      beamDuration={4}
      gridColor="rgba(15,23,42,0.12)"
    >
      <main className="w-full max-w-[540px] rounded-3xl bg-white px-9 py-11 text-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] max-[480px]:px-5 max-[480px]:py-8">
        <div className="mb-5">
          <img
            src={logo}
            alt="ترتيب"
            className="mx-auto h-auto max-w-[230px] object-contain max-[480px]:max-w-[190px]"
          />
        </div>

        <h1 className="mb-5 text-[32px] font-bold leading-[1.35] text-[#181818] max-[480px]:text-[26px]">
          ترتيب هو أول تطبيق لحجز رحلات السفر البري في اليمن
        </h1>

        <p className="mb-8 text-lg font-medium leading-[1.8] text-[#444] max-[480px]:mb-7 max-[480px]:text-base">
          حمل ترتيب الآن واكتشف الوجهات المتاحة.
        </p>

        <a
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#dc143c_0%,#8b0000_100%)] px-10 py-4 text-lg font-bold text-white no-underline shadow-[0_5px_15px_rgba(220,20,60,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(220,20,60,0.6)] active:translate-y-0 max-[480px]:px-8 max-[480px]:py-3.5 max-[480px]:text-base"
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => fbq("track", "Lead")}
        >
          حمل التطبيق الآن
        </a>
      </main>
    </WarpBackground>
  );
}
