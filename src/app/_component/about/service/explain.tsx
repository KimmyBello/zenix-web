import Image from "next/image";

export default function Explain() {
    return (
        <div className="flex flex-col items-center bg-gradient-to-t from-[#FFFFFF] to-transparent">
            <div className="mt-[80px]">
                <Image
                    src="/assets/images/etc/logo.svg"
                    alt="codinghub"
                    width={133}
                    height={160}
                />
            </div>
            {/* detail about */}
            <div className="max-w-screen-lg mx-auto">
                <p className="text-[#E71E26] text-center font-bold text-[40px] mt-[40px]">
                    About Zenix
                </p>
                <p className="mt-[50px] text-base text-[#424242] text-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas vel urna placerat, mattis est eu, mattis eros.
                    Integer tempor eleifend neque id accumsan. Duis vel nisl non dui luctus efficitur quis nec eros. Morbi ut ante
                    at elit euismod molestie sit amet pretium nulla. Maecenas egestas id risus at pretium. Vestibulum tincidunt ex
                    vitae sem sodales tincidunt. Nullam ex ante, pellentesque id diam non, eleifend gravida nibh. Curabitur sodales
                    et enim non porta. Mauris faucibus lorem ligula, sit amet interdum diam tincidunt vitae. Etiam ullamcorper sit amet
                    ex ac luctus.
                </p>
            </div>

        </div >
    );
}