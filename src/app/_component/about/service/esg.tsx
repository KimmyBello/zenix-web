import Image from "next/image";

export default function Discover() {
    return (
        <div className="flex flex-col items-center bg-gradient-to-t from-[#FFFFFF] to-transparent relative">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/about/esg.jpg"
                    alt="codinghub"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70 p-20"
                />
            </div>
            <div className="relative flex flex-col max-w-screen-lg mx-auto z-10 p-6 lg:p-[108px] mb-[80px]">
                <div className="flex max-w-screen-lg mx-auto justify-center mt-20">
                    <span className="text-[#424242] font-bold text-[32px] text-center">
                        ESG in Zenix
                    </span>
                </div>
                <div className="flex justify-center mt-[20px]">
                    <p className="text-[#616161] text-[16px] font-normal text-center">
                        As we drive digital transformation, Zenix remains deeply
                        committed to sustainability and ethical practices:
                    </p>
                </div>
                <div className="flex flex-wrap justify-between mt-[50px] gap-6">
                    <div className="flex-1 box-border bg-white h-[214px] w-[334px] p-[20px] rounded-lg shadow-2xl">
                        <span className="text-[#E71E26] text-center font-bold text-[20px]">
                            Environmental
                        </span>
                        <p className="mt-[10px] text-base text-[#424242] text-[20px]">
                            Zenix utilizes environmentally-friendly cloud infrastructure and
                            green data centers to reduce carbon emissions, while implementing
                        </p>
                    </div>
                    <div className="flex-1 box-border bg-white h-[214px] w-[334px] p-[20px] rounded-lg shadow-2xl">
                        <span className="text-[#E71E26] text-center font-bold text-[20px]">
                            Social
                        </span>
                        <p className="mt-[10px] text-base text-[#424242] text-[20px]">
                           We prioritize promoting digital literacy and STEM education in communities, 
                           as well as supporting diversity, equality, and inclusion within our.
                        </p>
                    </div>
                    <div className="flex-1 box-border bg-white h-[214px] w-[334px] p-[20px] rounded-lg shadow-2xl">
                        <span className="text-[#E71E26] text-center font-bold text-[20px]">
                            Governance
                        </span>
                        <p className="mt-[10px] text-base text-[#424242] text-[20px]">
                            In terms of ethical governance, we emphasize transparency, accountability,
                            and adherence to a code of conduct.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}