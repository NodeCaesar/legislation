import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './Servers.module.css';
import converter from 'number-to-words';
import axios from 'axios';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
  
function renderServers(servers) {
	let components = [];
	for (const serverNumber in servers) {
		const server = servers[serverNumber];
		components.push((<div className="alert alert--secondary" style={{
			width: "50%",
			textAlign: "left",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "baseline",
			fontSize: "1.5em",
			height: "3em"
		}} role="alert">
			<p><strong>Server {capitalizeFirstLetter(converter.toWords(serverNumber+1))}</strong> - {server.playerCount} players { serverNumber === 1 ? (<span class="badge badge--primary">Primary</span>) : "" }</p>
			<button onClick={() => window.open("https://www.roblox.com/games/9424052037/Pathos-III-Reborn", "_blank")} class="button button--success">Join</button>
		</div>))
		components.push((<br/>))
	}
	return components;
}

export default function Servers(props) {
	const [servers, setServers] = useState([]);

	useEffect(()=>{
		let timer;
		axios.get('https://dev.api.scpfofficial.com/public/publicServers').then((response) => {
			if (response && response.data) {
				setServers(response.data.result);
			}
		}).catch(console.warn);
		timer = setInterval(async ()=>{
			try {
				const response = await axios.get('https://dev.api.scpfofficial.com/public/publicServers');
				if (response && response.data) {
					setServers(response.data.result);
				}
			} catch (error) {
				
			}
		}, 20000),
		() => {
			if(timer) clearInterval(timer);
		}
	}, []); // empty bracket calls the useEffect callback on initial render
	return (
	<section className={styles.section}>
		<h2>Currently Online Servers</h2>
		{renderServers(servers)}
    </section>
  );
}
