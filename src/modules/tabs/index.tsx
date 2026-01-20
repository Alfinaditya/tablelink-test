import Tabs, { type TabsProps } from './components/tabs';

const tabs: TabsProps = {
	tabs: [
		{ content: 'This is content of tab 1', label: 'Tab 1 ' },
		{ content: 'This is content of tab 2', label: 'Tab 2 ' },
	],
	defaultIndex: 0,
};

const TabsPage = () => {
	return <Tabs tabs={tabs.tabs} defaultIndex={tabs.defaultIndex} />;
};

export default TabsPage;
