import { useState } from "react";
import {useTranslation} from "react-i18next";
export default function WorkItem({ project }) {
	const [isOpen, setIsOpen] = useState(false);
	const [activePhoto, setActivePhoto] = useState(0);
	const [t, i18n] = useTranslation();
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const hasVideo = project.yt && project.yt !== "/";
	const hasPhotos = project.foto && project.foto.length > 0;

	const getSizeClasses = (size) => {
		switch (size) {
			case "small":
				return "col-span-1 row-span-1";
			case "medium":
				return "col-span-1 row-span-2";
			case "large":
				return "col-span-2 row-span-2";
			case "wide":
				return "col-span-2 row-span-1";
			case "tall":
				return "col-span-1 row-span-3";
			default:
				return "col-span-1 row-span-1";
		}
	};

	const nextPhoto = () => {
		if (hasPhotos) {
			setActivePhoto((prev) => (prev + 1) % project.foto.length);
		}
	};

	const prevPhoto = () => {
		if (hasPhotos) {
			setActivePhoto((prev) => (prev - 1 + project.foto.length) % project.foto.length);
		}
	};

	return (
		<>
			{/* Grid Item */}
			<div
				className={`${getSizeClasses(project.size)} relative group cursor-pointer overflow-hidden flex flex-col gap-2`}
				onClick={openModal}
			>
				<div className="w-full h-full overflow-hidden rounded-sm">
					<div
						className="
                            absolute inset-0 z-10
                            flex flex-col items-center justify-center gap-2
                            opacity-0 group-hover:opacity-100
                            transition-all duration-300
                            backdrop-blur-sm w-full h-full
                            bg-black/50
                        "
					>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                            {t(project.genre)}
                        </span>
						<span className="font-sfpro font-extrabold text-white text-lg md:text-xl uppercase text-center px-4 line-clamp-2">
                            {project.title}
                        </span>
						<div className="mt-2 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
							{hasVideo ? (
								<svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M8 5v14l11-7z" />
								</svg>
							) : (
								<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							)}
						</div>
					</div>

					<img
						src={project.url}
						alt={project.title}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				</div>
			</div>

			{/* Modal Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
					onClick={closeModal}
				>
					<div
						className="relative w-full max-w-5xl max-h-[90vh] bg-neutral-950 overflow-hidden animate-modal-in rounded-3xl scroll-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-white/10 transition-colors"
							aria-label="Sluiten"
						>
							<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>


						<div className="overflow-y-auto max-h-[90vh]">


							{hasVideo ? (

								<div className="relative w-full aspect-video">
									<img
										src={project.url}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

									<a
										href={project.yt}
										target="_blank"
										rel="noopener noreferrer"
										className="absolute inset-0 flex items-center justify-center group/play"
									>
										<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover/play:bg-white/30 group-hover/play:scale-110 transition-all duration-300">
											<svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
												<path d="M8 5v14l11-7z" />
											</svg>
										</div>
									</a>
								</div>
							) : hasPhotos ? (

								<div className="relative w-full aspect-video bg-black">

									<img
										src={project.foto[activePhoto]}
										alt={`${project.title} foto ${activePhoto + 1}`}
										className="w-full h-full object-contain"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />

									{project.foto.length > 1 && (
										<>
											<button
												onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
												className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-white/20 transition-colors"
												aria-label="Vorige foto"
											>
												<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
												</svg>
											</button>
											<button
												onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
												className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-white/20 transition-colors"
												aria-label="Volgende foto"
											>
												<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
												</svg>
											</button>
										</>
									)}

									<div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-sm text-xs text-white/70">
										{activePhoto + 1} / {project.foto.length}
									</div>
								</div>
							) : (

								<div className="relative w-full aspect-video">
									<img
										src={project.url}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
								</div>
							)}

							<div className="px-6 md:px-10 pb-10 -mt-16 relative z-10">
								<div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="px-3 py-1 text-xs uppercase tracking-wider bg-mahogany/20 text-mahogany border border-mahogany/30">
                                        {t(project.genre)}
                                    </span>
									<span className="px-3 py-1 text-xs uppercase tracking-wider bg-white/5 text-white/60 border border-white/10">
                                        {project.date}
                                    </span>
									{hasPhotos && !hasVideo && (
										<span className="px-3 py-1 text-xs uppercase tracking-wider bg-white/5 text-white/60 border border-white/10">
                                            {project.foto.length} {t("foto's")}
                                        </span>
									)}
								</div>
								<h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 font-sfpro">
									{project.title}
								</h2>

								<p className="text-base md:text-lg font-light leading-relaxed text-white/80 mb-8">
									{t(project.desc)}
								</p>

								{hasPhotos && (
									<div className="mb-8">
										<h3 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">
											{t("Galerij")}
										</h3>
										<div className="grid grid-cols-4 md:grid-cols-5 gap-2">
											{project.foto.map((foto, index) => (
												<button
													key={index}
													onClick={() => setActivePhoto(index)}
													className={`aspect-video overflow-hidden transition-all duration-300 ${
														activePhoto === index
															? 'ring-2 ring-mahogany ring-offset-2 ring-offset-neutral-950'
															: 'opacity-50 hover:opacity-100'
													}`}
												>
													<img
														src={foto}
														alt={`${project.title} foto ${index + 1}`}
														className="w-full h-full object-cover"
													/>
												</button>
											))}
										</div>
									</div>
								)}

								<div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
									{hasVideo && (
										<a
											href={project.yt}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-mahogany hover:text-white transition-all duration-300"
										>
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
												<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
											</svg>
											<span>{t("Bekijk op YouTube")}</span>
										</a>
									)}
									<button
										onClick={closeModal}
										className={`flex items-center gap-3 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
											hasVideo
												? 'border border-white/30 text-white hover:bg-white/5'
												: 'bg-white text-black hover:bg-mahogany hover:text-white'
										}`}
									>
										<span>{t("sluiten")}</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<style>{`
                @keyframes modal-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-modal-in {
                    animation: modal-in 0.3s ease-out forwards;
                }
            `}</style>
		</>
	);
}