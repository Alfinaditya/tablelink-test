import { cn } from '@/lib/utils';
import { useState } from 'react';

type Tab = {
	label: string;
	content: React.ReactNode;
};

export interface TabsProps {
	tabs: Tab[];
	defaultIndex?: number;
}

export default function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
	const [activeIndex, setActiveIndex] = useState(defaultIndex);

	return (
		<div className="w-full">
			<div
				className="flex border-b gap-3 border-gray-200"
				role="tablist"
				aria-label="Tabs"
			>
				{tabs.map((tab, index) => (
					<button
						role="tab"
						type="button"
						id={`tab-${index}`}
						aria-selected={activeIndex === index}
						aria-controls={`tabpanel-${index}`}
						tabIndex={activeIndex === index ? 0 : -1}
						key={tab.label}
						onClick={() => setActiveIndex(index)}
						className={cn(
							`px-4 py-2 text-sm font-medium cursor-pointer rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`,
							activeIndex === index
								? 'bg-blue-500 text-white shadow-sm'
								: 'text-gray-500 hover:text-gray-700 hover:bg-gray-50',
						)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div
				role="tabpanel"
				id={`tabpanel-${activeIndex}`}
				aria-labelledby={`tab-${activeIndex}`}
				tabIndex={0}
				className="pt-4 focus:outline-none"
			>
				{tabs[activeIndex]?.content}
			</div>
		</div>
	);
}
