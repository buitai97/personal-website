import { CONTACT_LOTTIE } from "@/assets/lottie/string/contact";
import { APP_DATA } from "@/helpers/data";
import { Row, Col } from "react-bootstrap";
import SocialMedia from "../sections/social.media";
import AnimationLottie from "../share/animation-lottie";

const AppFooter = () => {
    return (
        <div>
            <Row>
                <Col md={6} xs={6} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
                <Col md={6} xs={6} className="d-flex flex-column mt-md-5 mt-3 align-items-center justify-content-center">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        github={APP_DATA.YOUTUBE_URL}
                        discord={APP_DATA.FACEBOOK_URL}
                        linkedin={APP_DATA.TIKTOK_URL}
                    />
                </Col >
                
            </Row>
        </div>
    )
}

export default AppFooter;
