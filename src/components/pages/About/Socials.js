import './Bios.css';

/**
 * Format a social media link.
 * @param {{
 * url: string
 * platform: string
 * fab: ?string
 * }} props Social URL, platform name, and FontAwesome fab class name
 * (defaults to `fab fa-lowercase-platform-name`)
 */
export function Social(props) {
	return (
		<li className="social-wrapper">
			<a className="button button2" href={props.url} target="_blank" rel="noreferrer">
				<div className="social-icon">
					<i className={props.fab ?? ('fab fa-' + props.platform.toLowerCase())}></i>
				</div>
				<span>{props.platform}</span>
			</a>
		</li>
	);
}

/**
 * Format a GitHub link.
 * @param {{
 * children: string
 * }} props The GitHub username to link to.
 */
export function GitHub(props) {
	return (
		<Social url={'https://github.com/' + props.children} platform="GitHub" />
	);
}

/**
 * Format a LinkedIn link.
 * @param {{
 * children: string
 * }} props The LinkedIn URL to link to.
 */
export function LinkedIn(props) {
	return (
		<Social url={props.children} platform="LinkedIn" />
	);
}

export const Roles = {
	founder: (<div><i className="far fa-lightbulb"></i> <span>Founder</span></div>),
	chiefExec: (<div><i className="fas fa-crown"></i> <span>Chief Executive</span></div>),
	frontend: (<div><i className="fas fa-code"></i> <span>Front-end Developer</span></div>)
};