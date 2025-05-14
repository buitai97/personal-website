import { SiDiscord, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

interface IProps{
    github: string,
    linkedin: string,
    discord: string,
}

const SocialMedia = (props: IProps) => {
    const { github, linkedin, discord } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Github">
                <SiGithub size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Linkedin">
                <FaLinkedin size={30} />
            </a>
            <a href={discord} target='_blank' className="highlight" title="Discord">
                <SiDiscord size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;