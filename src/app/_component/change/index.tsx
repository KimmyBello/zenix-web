import Image from "next/image";

export default function Change() {
    return (
        <div className="flex flex-col items-start bg-gradient-to-t from-[#FFFFFF] to-transparent">
            <div className="mt-[80px]">
                {/* <div className="grid grid-cols-12 max-w-screen-lg mx-auto"> */}
                <div className="relative max-w-screen-lg mx-auto">
                    <Image
                        src="/assets/images/about/digital.png"
                        alt="Example Image"
                        width={400}
                        height={800}
                        className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-center">
                        <div className="box-content bg-white p-4 rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg h-[240px] max-w-screen-lg mx-auto">
                            <p className="text-[#E71E26] text-center font-bold text-[40px]">
                                Digital Transformation
                            </p>
                            <p>
                                At Zenix, we believe that embracing digital transformation is
                                crucial for staying ahead in today's rapidly evolving technology
                            </p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}