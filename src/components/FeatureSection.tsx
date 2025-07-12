import FeatureCard from "./FeatureCard";
import supervisorIcon from '../assets/images/icon-supervisor.svg';
import teamIcon from '../assets/images/icon-team-builder.svg';
import karmaIcon from '../assets/images/icon-karma.svg';
import calculatorIcon from '../assets/images/icon-calculator.svg';

const FeatureSection = () => {
    return (
        <section>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-7">
                <FeatureCard
                title='Supervisor'
                description='Monitors activity to identify project roadblocks'
                icon={supervisorIcon}
                color='bg-[#44c2c0]'
            />
            <div className="flex flex-col gap-7">
                <FeatureCard
                title='Team Builder'
                description='Scans our talent network to create the optimal team for your project'
                icon={teamIcon}
                color='bg-[#f2545b]'
            />
            <FeatureCard
                title='Karma'
                description='Regularly evaluates our talent to ensure quality'
                icon={karmaIcon}
                color='bg-[#fcae4f]'
            />
            </div>
            <FeatureCard
                title='Calculator'
                description='Uses data from past projects to provide better delivery estimates'
                icon={calculatorIcon}
                color='bg-[#529ffb]'
            />
            </div>
        </section>
    )
}
export default FeatureSection;