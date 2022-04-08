import React, { Fragment, useState } from "react";
import Navbar from "components/Navigation/Navbar";
import Menu from "components/Navigation/Menu";

/*
	Navbar and menu wrapper
*/

const Navigation = ({ notHome = false, transparent = true }) => {
	const [opened, setOpened] = useState(false);

	const toggle = () => setOpened((prevState) => !prevState);
	const close = () => setOpened(false);

	return (
		<Fragment>
			<Navbar atClick={() => toggle()} transparent={transparent} />
			<Menu opened={opened} close={() => close()} notHome={notHome} />
		</Fragment>
	);
};

export default Navigation;
