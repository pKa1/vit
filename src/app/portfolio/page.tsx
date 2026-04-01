'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar';
import { Footerdemo } from '@/components/footer-demo';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { BackgroundPaths } from '@/components/ui/background-paths';

const parallaxImages = [
	{
		src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Современное архитектурное здание',
	},
	{
		src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Городской пейзаж на закате',
	},
	{
		src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Геометрический паттерн',
	},
	{
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Горный пейзаж',
	},
	{
		src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Минималистичный дизайн',
	},
	{
		src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Океан и пляж',
	},
	{
		src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Лес и солнечный свет',
	},
];

import { projects, categories } from '@/data/projects';

export default function PortfolioPage() {
	const [activeCategory, setActiveCategory] = useState<string>('all');

	const filtered = useMemo(
		() =>
			activeCategory === 'all'
				? projects
				: projects.filter((p) => p.category === activeCategory),
		[activeCategory],
	);

	return (
		<main className="overflow-x-hidden">
			<Navbar />

			{/* Hero section */}
			<div className="relative flex h-[60vh] items-center justify-center bg-zinc-950">
				<BackgroundPaths className="text-white" />

				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(255,60,0,0.08),transparent_50%)]',
						'blur-[60px]',
					)}
				/>
				<div className="relative z-10 text-center px-6">
					<p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
						Наши работы
					</p>
					<h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl">
						Портфолио
					</h1>
					<p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
						Реализованные проекты жилых и коммерческих объектов
					</p>
				</div>
			</div>

			{/* Zoom Parallax gallery */}
			<ZoomParallax images={parallaxImages} />

			{/* Portfolio projects */}
			<section className="bg-white">
				<div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">

					{/* Category tabs */}
					<div className="sticky top-0 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 bg-white/90 backdrop-blur-md pb-6 mb-10 sm:mb-14 border-b border-zinc-200/60">
						<div className="flex gap-1 overflow-x-auto pt-4 pb-1 no-scrollbar">
							{categories.map((cat) => (
								<button
									key={cat.id}
									onClick={() => setActiveCategory(cat.id)}
									className={cn(
										'relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors',
										activeCategory === cat.id
											? 'text-white'
											: 'text-zinc-500 hover:text-zinc-900',
									)}
								>
									{activeCategory === cat.id && (
										<motion.span
											layoutId="activeTab"
											className="absolute inset-0 rounded-full bg-zinc-900"
											transition={{ type: 'spring', stiffness: 380, damping: 30 }}
										/>
									)}
									<span className="relative z-10">{cat.label}</span>
								</button>
							))}
						</div>
					</div>

					{/* Projects grid */}
					<motion.div
						layout
						className="grid grid-cols-1 gap-16 sm:gap-20"
					>
						<AnimatePresence mode="popLayout">
							{filtered.map((project) => (
								<motion.div
									key={project.slug}
									layout
									initial={{ opacity: 0, scale: 0.95, y: 30 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.95, y: -20 }}
									transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
								>
									<Link
										href={`/portfolio/${project.slug}`}
										className="group block"
									>
										<div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9]">
											<img
												src={project.image}
												alt={project.title}
												className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											/>
											<div className="absolute inset-0 flex items-end bg-black/0 transition-colors duration-500 group-hover:bg-black/40">
												<div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 p-6 sm:p-8">
													<span className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-5 py-2.5 text-sm font-medium text-zinc-900">
														<span className="h-2 w-2 rounded-full bg-zinc-900" />
														Посмотреть проект
													</span>
												</div>
											</div>
										</div>

										<div className="mt-6 sm:mt-8">
											<h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
												{project.title}
											</h2>
											<p className="mt-3 max-w-2xl text-base text-zinc-500 leading-relaxed sm:text-lg">
												{project.description}
											</p>
										</div>
									</Link>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>
				</div>
			</section>

			<Footerdemo />
		</main>
	);
}
