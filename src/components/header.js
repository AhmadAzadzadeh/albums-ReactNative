import React from "react";
import { Text, View } from "react-native";

const Header = props => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: "skyblue",
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		paddingTop: 15,
		paddingBottom: 15,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		elevation: 2,
		position: "relative"
	},
	textStyle: {
		fontSize: 30,
		color: "white"
	}
};

export default Header;
