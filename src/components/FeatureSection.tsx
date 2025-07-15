import FeatureCard from "./FeatureCard";

const feature = [
    {
        title: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        icon: '/src/assets/images/icon-supervisor.svg',
        color: 'bg-[#44c2c0]',
    },
    {
        title: 'Team Builder',
        description: 'Scans our talent network to create the optimal team for your project',
        icon: '/src/assets/images/icon-team-builder.svg',
        color: 'bg-[#f2545b]'
    },
    {
        title: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        icon: '/src/assets/images/icon-karma.svg',
        color: 'bg-[#fcae4f]'
    },
    {
        title: 'Calculator',
        description: 'Uses data from past projects to provide better delivery estimates',
        icon: '/src/assets/images/icon-calculator.svg',
        color: 'bg-[#529ffb]'
    }

]

const FeatureSection = () => {
    return (
        <section>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-7">
                <FeatureCard
                    {...feature[0]}
                />
                <div className="flex flex-col gap-7">
                    <FeatureCard
                        {...feature[1]}
                    />
                    <FeatureCard
                        {...feature[2]}
                    />
                </div>
                <FeatureCard
                    {...feature[3]}
                />
            </div>
        </section>
    )
}
export default FeatureSection;