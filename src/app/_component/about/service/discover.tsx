import Image from "next/image";

export default function Discover() {
    return (
        <div className="flex flex-col items-center bg-gradient-to-t from-[#FFFFFF] to-transparent">
            <div className="mt-[80px]">
                <p className="text-center font-bold text-[40px] mb-[50px]">
                    Discover Our Unique Advantages
                </p>
                <div className="max-w-screen-lg mx-auto">
                    <div className="box-border p-5 h-[214px] w-[630px] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg">
                        <p className="text-center font-bold text-[20px]">
                            Innovative Solutions
                        </p>
                        <hr className="w-[50px] border-2 border-[#E71E26] mx-auto" />
                        <p className="mt-[20px] text-base text-[#424242] text-[20px]">
                            We continuously push the boundaries of what’s possible with technology,
                            ensuring that our clients receive the most advanced, efficient solutions that
                            are tailored to their needs. Our focus on cutting-edge innovation sets us
                            apart and keeps your business ahead of the curve.
                        </p>
                    </div>
                    <div className="box-border p-5 h-[214px] w-[630px] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg mt-[30px]">
                        <p className="text-center font-bold text-[20px]">
                            Proven Expertise
                        </p>
                        <hr className="w-[50px] border-2 border-[#E71E26] mx-auto" />
                        <p className="mt-[20px] text-base text-[#424242] text-[20px]">
                            We continuously push the boundaries of what’s possible with technology,
                            ensuring that our clients receive the most advanced, efficient solutions that
                            are tailored to their needs. Our focus on cutting-edge innovation sets us
                            apart and keeps your business ahead of the curve.                        </p>
                    </div>
                    <div className="box-border p-5 h-[214px] w-[630px] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg mt-[30px]">
                        <p className="text-center font-bold text-[20px]">
                            Client-Centric Approach
                        </p>
                        <hr className="w-[50px] border-2 border-[#E71E26] mx-auto" />
                        <p className="mt-[20px] text-base text-[#424242] text-[20px]">
                            We continuously push the boundaries of what’s possible with technology,
                            ensuring that our clients receive the most advanced, efficient solutions that
                            are tailored to their needs. Our focus on cutting-edge innovation sets us
                            apart and keeps your business ahead of the curve.                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}