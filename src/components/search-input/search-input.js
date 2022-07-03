import { forwardRef, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

/**
 * Search input component.
 * the `onChange` prop will fire after typing, calculated by `interval`
 */
const SearchInput = forwardRef(({ className, onChange, interval, ...rest }, ref) => {

	let intervalId = useRef();

	useEffect(() => {
		return () => {
			if (intervalId.current) {
				clearInterval(intervalId.current);
			}
		}
	}, [])

	const handleChange = (ev) => {

		if (intervalId.current) {
			clearTimeout(intervalId.current);
		}

		if (ev.target.value.trim().length === 0) {
			onChange?.(ev.target.value);
		} else {
			intervalId.current = setTimeout(() => {
				onChange?.(ev.target.value);
			}, interval);
		}


	}

	return (
		<input
			className={`
				w-full
				px-8 py-5
				text-lg
				rounded-full
				shadow-sm
				
				focus:outline-none 
				focus:shadow-lg

				${className || ''}
			`}
			type="search"
			ref={ref}
			onChange={handleChange}
			{...rest}
		/>
	);
});

SearchInput.propTypes = {
	className: PropTypes.string,
	/** onChange will fire after `interval` */
	onChange: PropTypes.func,
	/** The interval that `onChange` function will fire after user stop typing */
	interval: PropTypes.number,
}

SearchInput.defaultProps = {
	className: '',
	onChange: () => { },
	interval: 500,
}

export default SearchInput;