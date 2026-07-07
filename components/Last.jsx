import Image from "next/image";
import Link from "next/link";
import { FlipWord } from "./FlipWord";
import HoverButton from "./HoverButton";
const Last = () => {
    return (
        <div className="w-full flex justify-center bg-black px-4 py-10">

            {/* Main Black Box */}
            <div
                className="
          relative bg-black overflow-hidden
          w-full lg:w-[95%]
          rounded-[40px]
        "
            >
                {/* GRID BACKGROUND */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
             linear-gradient(rgba(160, 160, 160, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(160, 160, 160, 0.15) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-14 gap-12">

                    {/* LEFT TEXT */}
                    <div className="max-w-xl text-white">
                        <FlipWord />

                        {/* BUTTONS */}
                        <div className="mt-8 flex items-center gap-4">
                            <Link href="/contact">
                                <HoverButton>Contact Us</HoverButton>
                            </Link>
                            

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-[520px]">
                        <Image
                            src="/Carimage.png"
                            alt="Car"
                            className="w-full object-contain"
                            width={800}      // Add an appropriate width
                            height={500}     // Add an appropriate height
                            priority         // Optional: if you want it to load quickly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Last;