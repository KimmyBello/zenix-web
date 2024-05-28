import Image from "next/image";

export default function Discover() {
    return (
        <div className="flex flex-col items-center h-full bg-gradient-to-t from-[#FFFFFF] to-transparent">
            {/* <div className="mt-[80px]"> */}
                <Image
                    src="/assets/images/about/esg.jpg"
                    alt="codinghub"
                    width={1280}
                    height={700}
                />
            {/* </div> */}

        </div>
    );
}