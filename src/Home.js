import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div className="row">
				<div className="one-half column">
					<h5>About</h5>
					<p>Welcome to Kopjes Mk. III. Enjoy yourself!</p>
					<p>Must be 18+ to join. Please verify & review the rules!</p>
					<p>
						#MusicMonday <br />
						#TinderTuesday <br />
						#WickedWednesday <br />
						#TreasureThursday <br />
						#FunFactsFriday <br />
						#StickerSaturday <br />
						#SelfieSunday <br />
					</p>
				</div>
				<div className="one-half column">
					<h5>Useful Links</h5>
					<ul>
						<li><a href="https://docs.google.com/forms/d/1DfH9S5kJdIBHqfyawKS5rIML5tacw41XIVWNtSosLEA/viewform?edit_requested=true">Report Issues to Mods</a></li>
						<li><a href="https://reddit.com/r/kopjes">Subreddit</a></li>
						<li><a href="http://steamcommunity.com/groups/kopjesgame">Steam Group</a></li>
						<li><a href="https://discordapp.com/invite/cR7F8kj">Discord</a></li>
						<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeJv-K4w_4hi_Z5Dg7fxtGYMNMt_LiotMlsyE06VVcfFHeRYQ/viewform">Kopjes Handles Submission Form</a></li>
						<li><a href="https://docs.google.com/spreadsheets/d/1r3UxRXBHfMgMXRXXcsb6ZIdiZTkB-TzxQ1KL7AWlgfc">View Kopjes Handles</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Home;
