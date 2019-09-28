import * as React from 'react';
import Helmet from 'react-helmet';

interface HeadProps {
	description: string;
	lang: string;
	title: string;
}

class Head extends React.Component<HeadProps> {
	render() {
		const {description, lang, title} = this.props;

		return (
			<Helmet
				htmlAttributes={{
					lang,
				}}
				title={title}
				meta={[
					{
						name: 'description',
						content: description,
					},
					{
						property: 'og:title',
						content: title,
					},
					{
						property: 'og:description',
						content: description,
					},
					{
						property: 'og:type',
						content: 'website',
					},
				]}
			/>
		);
	}
}

export default Head;
