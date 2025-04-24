'use client';

import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google';
import { GaCtaEvent } from './ga.constant';

interface GACtaProps extends React.HTMLAttributes<HTMLButtonElement> {
	event: GaCtaEvent;
}

export default function GACta({
	children,
	className,
	event,
	onClick,
	...rest
}: GACtaProps) {
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		sendGAEvent('event', event);
		sendGTMEvent('event', event);
		onClick?.(e);
	}

	return (
		<button type="button" onClick={handleClick} className={className} {...rest}>
			{children}
		</button>
	);
}
