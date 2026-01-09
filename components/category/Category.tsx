import Image from "next/image";

export default function Category() {
    return (
        <div className="container mx-auto bg-slate-50">
            <h1 className="text-3xl font-semibold text-center mx-auto ">Our Latest Categories</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                Explore our latest categories of products, each designed with care and attention to detail.
            </p>
            
            <div className="flex items-center gap-6 h-[300px] w-full max-w-7xl mt-10 mx-auto">
                <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <Image className="h-full w-full object-cover object-center"
                        src="https://static.pakwheels.com/2017/07/img.jpg"
                        width={500}
                        height={400}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Prompt engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>
            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <Image className="h-full w-full object-cover object-center"
                        src="https://static.pakwheels.com/2017/07/img.jpg"
                        width={500}
                        height={400}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Prompt engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>
            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <Image className="h-full w-full object-cover object-center"
                        src="https://static.pakwheels.com/2017/07/img.jpg"
                        width={500}
                        height={400}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Prompt engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>
            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <Image className="h-full w-full object-cover object-right"
                        src="https://static.pakwheels.com/2017/07/img.jpg"
                        width={500}
                        height={400}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Data scientists</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>
            
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full">
                    <Image className="h-full w-full object-cover object-center"
                        src="https://static.pakwheels.com/2017/07/img.jpg"
                        width={500}
                        height={400}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Software engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>
            
                    </div>
                </div>
            </div>
        </div>
    );
};