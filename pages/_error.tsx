import NextErrorComponent from 'next/error'

interface ErrorPageProps {
	statusCode: number
	hasGetInitialPropsRun: boolean
	err: any
}

const MyError = (props: ErrorPageProps): JSX.Element => {
	const { statusCode, hasGetInitialPropsRun, err } = props

	if (!hasGetInitialPropsRun && err) {
		// getInitialProps is not called in case of
		// https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
		// err via _app.js so it can be captured
		console.error(err)
		// Flushing is not required in this case as it only happens on the client
	}

	return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async context => {
	const errorInitialProps = await NextErrorComponent.getInitialProps(context)

	const { res, err, asPath } = context

	// Workaround for https://github.com/vercel/next.js/issues/8592, mark when
	// getInitialProps has run
	// @ts-ignore
	errorInitialProps.hasGetInitialPropsRun = true

	// Returning early because we don't want to log 404 errors to Sentry.
	if (res?.statusCode === 404) {
		return errorInitialProps
	}

	// Running on the server, the response object (`res`) is available.
	//
	// Next.js will pass an err on the server if a page's data fetching methods
	// threw or returned a Promise that rejected
	//
	// Running on the client (browser), Next.js will provide an err if:
	//
	//  - a page's `getInitialProps` threw or returned a Promise that rejected
	//  - an exception was thrown somewhere in the React lifecycle (render,
	//    componentDidMount, etc) that was caught by Next.js's React Error
	//    Boundary. Read more about what types of exceptions are caught by Error
	//    Boundaries: https://reactjs.org/docs/error-boundaries.html

	if (err) {
		console.error(err)
		return errorInitialProps
	}

	// If this point is reached, getInitialProps was called without any
	// information about what the error might be. This is unexpected and may
	// indicate a bug introduced in Next.js, so record it in Sentry
	console.error('An error occurred')

	return errorInitialProps
}

export default MyError
