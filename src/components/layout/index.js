import React, { Component } from 'react';
import '../../flex.css';
import Footer from "./Footer";
import Header from "./Header";

class Layout extends Component {

	render() {
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
  	}
}

export default Layout;