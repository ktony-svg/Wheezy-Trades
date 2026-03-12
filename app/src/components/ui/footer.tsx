import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Youtube, MessageCircle, Instagram } from 'lucide-react';

type FooterProps = React.ComponentProps<'footer'> & {
	children?: React.ReactNode;
};

export function Footer({ className, ...props }: Omit<FooterProps, 'children'>) {
	return (
		<footer
			className={cn(
				'border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]',
				className,
			)}
			{...props}
		>
			<div className="relative mx-auto max-w-5xl px-4">
				<div className="relative grid grid-cols-1 border-x border-white/10 md:grid-cols-4 md:divide-x md:divide-white/10">
					<div>
						<SocialCard 
							title="YouTube" 
							href="https://youtube.com/@wheezytrades" 
							icon={<Youtube className="h-4 w-4" />}
						/>
						<LinksGroup
							title="Learn"
							links={[
								{ title: 'Trading Models', href: '#features' },
								{ title: 'Mentorship', href: '#mentorship' },
								{ title: 'Live Trading', href: '#mentorship' },
								{ title: 'Pricing', href: '#pricing' },
							]}
						/>
					</div>
					<div>
						<SocialCard 
							title="Discord" 
							href="https://whop.com/wheezytradess" 
							icon={<MessageCircle className="h-4 w-4" />}
						/>
						<LinksGroup
							title="Support"
							links={[
								{ title: 'Help Center', href: '#' },
								{ title: 'Terms', href: '#' },
								{ title: 'Privacy', href: '#' },
								{ title: 'FAQ', href: '#' },
							]}
						/>
					</div>

					<div>
						<SocialCard 
							title="Instagram" 
							href="https://www.instagram.com/wheezytrades" 
							icon={<Instagram className="h-4 w-4" />}
						/>
						<LinksGroup
							title="Community"
							links={[
								{ title: 'Discord Server', href: 'https://whop.com/wheezytradess' },
								{ title: 'Live Sessions', href: '#mentorship' },
								{ title: 'Trade Reviews', href: '#mentorship' },
								{ title: 'Success Stories', href: '#' },
							]}
						/>
					</div>
					<div>
						<SocialCard 
							title="Contact" 
							href="mailto:wheezytrades@gmail.com" 
							icon={<ArrowRight className="h-4 w-4" />}
						/>
						<LinksGroup
							title="Resources"
							links={[
								{ title: 'YouTube Videos', href: 'https://youtube.com/@wheezytrades' },
								{ title: 'Trading Blog', href: '#' },
								{ title: 'Market Analysis', href: '#' },
								{ title: 'Free Content', href: 'https://youtube.com/@wheezytrades' },
							]}
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center border-t border-white/10 p-4">
				<p className="text-gray-500 text-xs">
					© {new Date().getFullYear()} wheezytrades. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

interface LinksGroupProps {
	title: string;
	links: { title: string; href: string }[];
}
function LinksGroup({ title, links }: LinksGroupProps) {
	return (
		<div className="p-4">
			<h3 className="text-white/75 mt-2 mb-4 text-xs font-medium tracking-wider uppercase">
				{title}
			</h3>
			<ul className="space-y-2">
				{links.map((link) => (
					<li key={link.title}>
						<a
							href={link.href}
							className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

function SocialCard({ title, href, icon }: { title: string; href: string; icon?: React.ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group hover:bg-cyan-500/10 hover:text-cyan-400 flex items-center justify-between border-t border-b border-white/10 p-4 text-sm md:border-t-0 transition-all duration-300"
		>
			<span className="font-medium flex items-center gap-2">
				{icon && <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">{icon}</span>}
				{title}
			</span>
			<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
		</a>
	);
}
