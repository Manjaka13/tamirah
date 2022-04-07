import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faHeart,
	faPhone,
	faMapMarkerAlt,
	faCalendarAlt,
	faBars,
	faHome,
	faGears,
	faImage,
	faHandHoldingDollar,
	faCaretDown,
	faHandshake,
	faDotCircle,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";

/*
	Import all icons here
*/

// Manually add fontawesome styles
config.autoAddCss = false;

library.add(
	// Brands
	faFacebook,
	faInstagram,
	// Standard icons
	faEnvelope,
	faHeart,
	faPhone,
	faMapMarkerAlt,
	faCalendarAlt,
	faBars,
	faHome,
	faGears,
	faImage,
	faHandHoldingDollar,
	faCaretDown,
	faHandshake,
	faDotCircle,
	faCircle
);
