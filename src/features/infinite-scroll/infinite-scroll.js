import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { InfiniteScrollLoader } from './infinite-scroll-loader';
import PropTypes from 'prop-types';

/**
 * InfiniteScroll component
 */
export const InfiniteScroll = ({ onNext, threshold, hasMore }) => {

	/**
	 * refrence for checking the component is in viewport
	 */
	const { ref, inView } = useInView({ threshold });

	/**
	 * loading status
	 */
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * calls `onNext` callback when component is in viewport
	 * and `hasMore` is true
	 */
	useEffect(() => {

		if (isLoading || !inView || !hasMore) return;

		if (typeof onNext === "function") {
			setIsLoading(true);
			onNext().then(_ => {
				setTimeout(() => {
					setIsLoading(false)
				}, 0);
			})
		}


	}, [inView, isLoading, hasMore])

	return (
		<div ref={ref}>
			{isLoading && <InfiniteScrollLoader />}
		</div>
	)
}

InfiniteScroll.propTypes = {
	/** The function that will fire when user get in viewport */
	onNext: PropTypes.func.isRequired,
	/** Threshold of scroll friction */
	threshold: PropTypes.number,
	/** The component works only if hasMore items */
	hasMore: PropTypes.bool
}

InfiniteScroll.defaultProps = {
	onNext: () => { },
	threshold: 0,
	hasMore: true
}