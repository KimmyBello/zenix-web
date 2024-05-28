import Image from "next/image";

export default function Change() {
    return (
        <div className="mt-[80px] mb-[280px]">
            <div className="flex flex-col items-center bg-gradient-to-t from-[#FFFFFF] to-transparent relative">
                <div className="absolute inset-0 z-0 w-1/2 h-[500px]">
                    <Image
                        src="/assets/images/about/digital.png"
                        alt="codinghub"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative flex flex-col  max-w-screen-lg mx-auto justify-center w-1/2 rounded-lg shadow-2xl bg-white top-[140px] left-[120px]">
                    <div className="box-border h-[214px] w-full p-[20px] rounded-lg shadow-2xl">
                        <span className="text-[#E71E26] text-center font-bold text-[40px]">
                            Digital Transformation
                        </span>
                        <p className="mt-[10px] text-base text-[#424242] text-[20px]">
                            At Zenix, we believe that embracing digital transformation is crucial
                            for staying ahead in today's rapidly evolving technology landscape.
                            We are on a continuous journey to integrate cutting-edge digital solutions
                            across every aspect of our business operations, products, and services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}