
type FeatureCardProp = {
    title: string,
    description: string,
    icon: string,
    color?: string
}

const FeatureCard = ({ title, description, icon, color }: FeatureCardProp) => {
    return (
        <div className=" bg-white rounded-lg drop-shadow-lg flex flex-col w-full max-w-sm overflow-hidden transition duration-200 ease-in-out hover:shadow-xl active:scale-95 cursor-pointer">
            <div className={`h-1 ${color ?? 'bg-[#f2545b]'}`}></div>
            <div className="px-10 py-6 flex flex-col justify-between">
                <div>
                    <h1 className="font-bold text-gray-800 text-xl">{title}</h1>
                    <p className="text-gray-500 text-sm mt-2">{description}</p>
                </div>
                <div className="mt-8 mb-5 flex justify-end">
                    <img src={icon} alt={title} className="w-16 h-16" />
                </div>
            </div>
        </div>
    )
}

export default FeatureCard;