import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollView from '../components/ScrollView';
import ErrorBoundry from '../components/ErrorBoundry';
import { robots } from './robots';

class App extends Component {

	constructor() {
		super();

		this.state = {
			robots: robots,
			searchfield: '',
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});	
	}

	render() {

		//filter robots based on search field 
		const filteredRobots = this.state.robots.filter((robot) =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return( 
			<div className="tc xo">
				<h1 className="tc f-headline lh-solid washed-red courier"> ROBOTS</h1>
				<SearchBox onSearch={this.onSearchChange}/>
				<ScrollView>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</ScrollView>
			</div>
		);
	}
}

export default App;