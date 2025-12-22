import banner from "../../../public/assets/about/diefte.jpg"
import banner2 from "../../../public/assets/banners/wc.png"
import banner3 from "../../../public/assets/banners/deur.png"
import banner4 from "../../../public/assets/banners/fokt 7.png"
import { useEffect, useState } from "react"
import {useTranslation} from "react-i18next";

export default function Carrousel() {
	const { t, i18n } = useTranslation();
	const carrouselItems = [
		{
			image: banner,
			tagline: t("videografie op maat"),
			title: t("Turning Moments"),
			subtitle: t("Into Motion")
		},
		{
			image: banner2,
			tagline: t("creatieve visie"),
			title: t("Turning Moments"),
			subtitle: t("Into Motion")
		},
		{
			image: banner3,
			tagline: t("jouw idee gevisualiseerd"),
			title: t("Turning Moments"),
			subtitle: t("Into Motion")
		},
		{
			image: banner4,
			tagline: t("voor het kleine en grote scherm"),
			title: t("Turning Moments"),
			subtitle: t("Into Motion")
		}
	]
	const [index, setIndex] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTransitioning(true)
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % carrouselItems.length)
				setIsTransitioning(false)
			}, 500)
		}, 10000)

		return () => clearTimeout(timer)
	}, [index])

	const currentItem = carrouselItems[index]

	return (
		<div className="relative w-full h-full overflow-hidden">
			<div
				className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
			>
				<img
					src={currentItem.image}
					alt=""
					className="w-full h-full object-cover animate-slow-zoom"
				/>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

			<div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16">
				<div className={`max-w-4xl transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
					<span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 font-light mb-4 block">
                        {currentItem.tagline}
                    </span>

					<h1 className="font-miller italic font-stretch-extra-condensed uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-2">
						{currentItem.title}
					</h1>
					<h1 className="font-sfpro font-bold uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-mahogany leading-none">
						{currentItem.subtitle}
					</h1>

					<div className="mt-8 md:mt-12 flex flex-row items-center gap-6">
						<a
							href="/work"
							className="group flex items-center gap-3 px-6 py-3 border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
						>
							<span className="text-sm uppercase tracking-wider font-medium">{t("home.viewWork")}</span>
							<svg
								className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
						<a
							href="/contact"
							className="text-sm uppercase tracking-wider font-medium text-white/70 hover:text-white transition-colors"
						>
							{t("nav.contact")}
						</a>
					</div>
				</div>

				<div className="absolute bottom-8 right-6 md:right-16 flex items-center gap-3">
					{carrouselItems.map((_, i) => (
						<button
							key={i}
							onClick={() => {
								setIsTransitioning(true)
								setTimeout(() => {
									setIndex(i)
									setIsTransitioning(false)
								}, 500)
							}}
							className={`h-0.5 transition-all duration-300 ${
								i === index
									? 'w-12 bg-white'
									: 'w-6 bg-white/30 hover:bg-white/50'
							}`}
							aria-label={`Go to slide ${i + 1}`}
						/>
					))}
				</div>
			</div>

		</div>
	)
}