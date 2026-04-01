'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Ruler, CalendarDays, Palette, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footerdemo } from '@/components/footer-demo';
import { getProjectBySlug, categoryLabels } from '@/data/projects';

export default function ProjectPage() {
	const { slug } = useParams<{ slug: string }>();
	const project = getProjectBySlug(slug);
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	if (!project) {
		return (
			<main className="overflow-x-hidden">
				<Navbar />
				<div className="flex min-h-screen items-center justify-center bg-white pt-20">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-zinc-900">Проект не найден</h1>
						<p className="mt-4 text-zinc-500">Запрошенный проект не существует</p>
						<Link
							href="/portfolio"
							className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Вернуться в портфолио
						</Link>
					</div>
				</div>
			</main>
		);
	}

	const gallery = project.gallery ?? [{ src: project.image, alt: project.title }];

	const detailItems = [
		{ icon: MapPin, label: 'Расположение', value: project.details?.location },
		{ icon: Ruler, label: 'Площадь', value: project.details?.area },
		{ icon: CalendarDays, label: 'Год', value: project.details?.year },
		{ icon: Palette, label: 'Стиль', value: project.details?.style },
		{ icon: CheckCircle2, label: 'Статус', value: project.details?.status },
	].filter((item) => item.value);

	const openLightbox = (index: number) => setLightboxIndex(index);
	const closeLightbox = () => setLightboxIndex(null);
	const prevImage = () =>
		setLightboxIndex((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : null));
	const nextImage = () =>
		setLightboxIndex((prev) => (prev !== null ? (prev + 1) % gallery.length : null));

	return (
		<main className="overflow-x-hidden">
			<Navbar />

			{/* Cover image */}
			<div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
				<img
					src={project.image}
					alt={project.title}
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

				<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
					<div className="mx-auto max-w-[1400px]">
						<Link
							href="/portfolio"
							className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Портфолио
						</Link>
						<span className="ml-4 inline-block rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/90">
							{categoryLabels[project.category]}
						</span>
						<h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl lg:text-6xl">
							{project.title}
						</h1>
					</div>
				</div>
			</div>

			{/* Content */}
			<section className="bg-white">
				<div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
					<div className="grid gap-12 lg:grid-cols-[1fr_360px]">
						{/* Left — description */}
						<div>
							<h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
								О проекте
							</h2>
							<p className="mt-6 text-lg leading-relaxed text-zinc-600">
								{project.fullDescription ?? project.description}
							</p>
						</div>

						{/* Right — details card */}
						{detailItems.length > 0 && (
							<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 h-fit lg:sticky lg:top-24">
								<h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-6">
									Характеристики
								</h3>
								<div className="space-y-5">
									{detailItems.map((item) => (
										<div key={item.label} className="flex items-start gap-3">
											<item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-400" />
											<div>
												<div className="text-xs text-zinc-400 uppercase tracking-wider">
													{item.label}
												</div>
												<div className="mt-0.5 text-sm font-medium text-zinc-900">
													{item.value}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Gallery */}
					{gallery.length > 0 && (
						<div className="mt-16 sm:mt-20">
							<h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl mb-8">
								Галерея
							</h2>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								{gallery.map((img, i) => (
									<button
										key={i}
										onClick={() => openLightbox(i)}
										className={`group relative overflow-hidden rounded-xl ${
											i === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
										}`}
									>
										<img
											src={img.src}
											alt={img.alt}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
									</button>
								))}
							</div>
						</div>
					)}

					{/* Back link */}
					<div className="mt-16 border-t border-zinc-200 pt-8">
						<Link
							href="/portfolio"
							className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Все проекты
						</Link>
					</div>
				</div>
			</section>

			<Footerdemo />

			{/* Lightbox */}
			<AnimatePresence>
				{lightboxIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-sm"
						onClick={closeLightbox}
					>
						<button
							onClick={closeLightbox}
							className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
						>
							<X className="h-6 w-6" />
						</button>

						{gallery.length > 1 && (
							<>
								<button
									onClick={(e) => { e.stopPropagation(); prevImage(); }}
									className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
								>
									<ChevronLeft className="h-6 w-6" />
								</button>
								<button
									onClick={(e) => { e.stopPropagation(); nextImage(); }}
									className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
								>
									<ChevronRight className="h-6 w-6" />
								</button>
							</>
						)}

						<motion.img
							key={lightboxIndex}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.25 }}
							src={gallery[lightboxIndex].src}
							alt={gallery[lightboxIndex].alt}
							className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
							onClick={(e) => e.stopPropagation()}
						/>

						<div className="absolute bottom-6 text-center text-sm text-white/60">
							{lightboxIndex + 1} / {gallery.length}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
