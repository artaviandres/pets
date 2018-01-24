import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<title>
						Sureal Music - a digital music platform for artists and fans
					</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link
						rel="shortcut icon"
						type="image/png"
						href="/static/images/favicon.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>

                <style jsx global>{`
					body {
                        margin: 0;
                        background-color: #F5F5F5;
					}
				`}</style>
			</html>
		);
	}
}
