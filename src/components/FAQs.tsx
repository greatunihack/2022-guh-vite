import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import QuestionData from '@data/faqs.json';
import Layout from './Layout';

const FAQs = (): JSX.Element => {
	return (
		<Layout title='FAQs'>
			<div className='hidden lg:grid grid-cols-3 gap-4 '>
				{QuestionData.map(({ question, answer }, i) => (
					<div
						className='rounded-lg shadow-md px-6 py-4 bg-white transition ease-in-out delay-150 hover:drop-shadow-lg hover:-translate-y-1'
						key={`faq_desktop_${i}`}
					>
						<h1 className='text-xl font-bold mb-2 text-gray-900'>{question}</h1>
						<p className='text-lg text-gray-500'>{answer}</p>
					</div>
				))}
			</div>
			<div className='flex flex-col space-y-3 lg:hidden'>
				{QuestionData.map(({ question, answer }, i) => (
					<Disclosure as={'div'} className='rounded shadow-md px-6 py-4 bg-white' key={`faq_mobile_${i}`}>
						<Disclosure.Button
							className={
								'flex w-full justify-between items-center text-left text-lg md:text-xl font-medium text-gray-900'
							}
						>
							{question}
							<ChevronUpIcon className='ui-open:rotate-180 ui-open:transform h-6 w-6 text-gray-900' />
						</Disclosure.Button>
						<Disclosure.Panel className={'pt-4 px-2 tex-md md:text-lg text-gray-500'}>{answer}</Disclosure.Panel>
					</Disclosure>
				))}
			</div>
		</Layout>
	);
};

export default FAQs;
