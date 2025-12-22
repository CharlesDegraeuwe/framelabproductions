import { useTranslation } from "react-i18next";
import Carrousel from "../../components/carrousel/Carrousel.jsx";
import lennert from "../../../public/assets/about/lennert.jpeg";
import charles from "../../../public/assets/about/charles.jpg";
import lennert2 from "../../../public/assets/about/diefte.jpg";
import brainstorming from "../../../public/assets/home/brainstorming.jpg";
import bmpcc from "../../../public/assets/home/bmpcc.jpg";
import editing from "../../../public/assets/home/editing.jpg";
import brain from "../../../public/assets/home/brain.png";
import cinestack from "../../../public/assets/home/svgs/cinestack.svg";
import editingIcon from "../../../public/assets/home/editing.png";
import diefte1 from "../../../public/projects/diefte.jpg";
import { Link } from "react-router";
import {Helmet} from "react-helmet-async";
import SEO from "../../seo/Seo.jsx";

export default function Home() {
	const { t } = useTranslation();

	return (<>
			<SEO page="home" />
			<div className="w-full min-h-screen font-sfpro">
			<div className="fixed inset-0 z-0">
				<Carrousel />
			</div>
			<div className="relative z-10 mt-[110vh] bg-blah">
				<div className="absolute -top-12 left-0 right-0 h-12 bg-blah rounded-t-[3rem]" />

				<section className="px-6 md:px-16 pt-20 pb-16 md:pt-28 md:pb-24">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-row items-baseline gap-3 md:gap-5 mb-12 md:mb-16">
                            <span className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-4xl sm:text-5xl md:text-[7vh]">
                                {t("home.whatWeDo.title1")}
                            </span>
							<span className="font-sfpro font-stretch-extra-expanded font-bold uppercase text-4xl sm:text-5xl md:text-[6vh]">
                                {t("home.whatWeDo.title2")}
                            </span>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
							<div className="space-y-6 text-base md:text-lg font-light leading-relaxed">
								<p>{t("home.whatWeDo.description1")}</p>
								<p>{t("home.whatWeDo.description2")}</p>
							</div>
							<div className="flex items-center justify-end">
								<Link
									to="/contact"
									className="group flex items-center gap-4 text-sm uppercase tracking-wider font-medium hover:gap-6 transition-all duration-300"
								>
									<span>{t("home.whatWeDo.cta")}</span>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<div className="max-w-6xl mx-auto px-6 md:px-16">
					<div className="w-full h-px bg-white/10" />
				</div>

				{/* Diensten Section */}
				<section className="px-6 md:px-16 py-16 md:py-24">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-row items-baseline gap-3 md:gap-5 mb-12 md:mb-16">
                            <span className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-4xl sm:text-5xl md:text-[7vh]">
                                {t("home.services.title1")}
                            </span>
							<span className="font-sfpro font-stretch-extra-expanded font-bold uppercase text-4xl sm:text-5xl md:text-[6vh]">
                                {t("home.services.title2")}
                            </span>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
							<Link to="/contact" className="group relative">
								<div className="relative overflow-hidden aspect-[3/4]">
									<img
										src={brainstorming}
										alt={t("home.services.brainstorm.title")}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

									<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
										<img
											src={brain}
											alt=""
											className="w-10 h-10 mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
										/>
										<h3 className="text-xl md:text-2xl font-bold mb-2">
											{t("home.services.brainstorm.title")}
										</h3>
										<p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
											{t("home.services.brainstorm.description")}
										</p>
									</div>

									<span className="absolute top-6 right-6 text-6xl font-bold text-white/10 font-miller italic">
                                        01
                                    </span>
								</div>
							</Link>

							<Link to="/contact" className="group relative">
								<div className="relative overflow-hidden aspect-[3/4]">
									<img
										src={bmpcc}
										alt={t("home.services.production.title")}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

									<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
										<img
											src={cinestack}
											alt=""
											className="w-10 h-10 mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
										/>
										<h3 className="text-xl md:text-2xl font-bold mb-2">
											{t("home.services.production.title")}
										</h3>
										<p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
											{t("home.services.production.description")}
										</p>
									</div>

									<span className="absolute top-6 right-6 text-6xl font-bold text-white/10 font-miller italic">
                                        02
                                    </span>
								</div>
							</Link>

							<Link to="/contact" className="group relative">
								<div className="relative overflow-hidden aspect-[3/4]">
									<img
										src={editing}
										alt={t("home.services.postProduction.title")}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

									<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
										<img
											src={editingIcon}
											alt=""
											className="w-10 h-10 mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
										/>
										<h3 className="text-xl md:text-2xl font-bold mb-2">
											{t("home.services.postProduction.title")}
										</h3>
										<p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
											{t("home.services.postProduction.description")}
										</p>
									</div>

									<span className="absolute top-6 right-6 text-6xl font-bold text-white/10 font-miller italic">
                                        03
                                    </span>
								</div>
							</Link>
						</div>
					</div>
				</section>

				{/* Featured Work Section */}
				<section className="px-6 md:px-16 py-16 md:py-24 bg-black/30">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-row items-baseline gap-3 md:gap-5 mb-12 md:mb-16">
                            <span className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-4xl sm:text-5xl md:text-[7vh]">
                                {t("home.featuredWork.title1")}
                            </span>
							<span className="font-sfpro font-stretch-extra-expanded font-bold uppercase text-4xl sm:text-5xl md:text-[6vh]">
                                {t("home.featuredWork.title2")}
                            </span>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
							<div className="lg:col-span-3 relative group">
								<div className="overflow-hidden">
									<img
										src={diefte1}
										alt="De Diefte"
										className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
										<svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
											<path d="M8 5v14l11-7z" />
										</svg>
									</div>
								</div>
							</div>

							<div className="lg:col-span-2 space-y-6">
                                <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                                    {t("home.featuredWork.featured")}
                                </span>
								<h3 className="text-3xl md:text-4xl font-bold">
									{t("home.featuredWork.deDiefte.title")}
								</h3>
								<p className="text-base md:text-lg font-light leading-relaxed text-white/80">
									{t("home.featuredWork.deDiefte.description")}
								</p>
								<div className="flex flex-wrap gap-3 pt-2">
                                    <span className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/60">
                                        {t("home.featuredWork.tags.cinematography")}
                                    </span>
									<span className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/60">
                                        {t("home.featuredWork.tags.editing")}
                                    </span>
									<span className="px-3 py-1 text-xs uppercase tracking-wider border border-white/20 text-white/60">
                                        {t("home.featuredWork.tags.colorGrading")}
                                    </span>
								</div>
								<Link
									to="/work"
									className="inline-flex items-center gap-3 mt-4 px-6 py-3 border border-white/30 hover:border-white hover:bg-white/5 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
								>
									<span>{t("home.featuredWork.viewAll")}</span>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Wie Wij Zijn Section */}
				<section className="px-6 md:px-16 py-16 md:py-24">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-row items-baseline gap-3 md:gap-5 mb-12 md:mb-16">
                            <span className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-4xl sm:text-5xl md:text-[7vh]">
                                {t("home.whoWeAre.title1")}
                            </span>
							<span className="font-sfpro font-stretch-extra-expanded font-bold uppercase text-4xl sm:text-5xl md:text-[6vh]">
                                {t("home.whoWeAre.title2")}
                            </span>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
							<div className="space-y-8">
								<div className="space-y-6 text-base md:text-lg font-light leading-relaxed">
									<p>{t("home.whoWeAre.description1")}</p>
									<p>{t("home.whoWeAre.description2")}</p>
								</div>

								<div className="grid grid-cols-2 gap-6 pt-4">
									<div className="space-y-2">
                                        <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                                            {t("home.whoWeAre.cinematography")}
                                        </span>
										<a
											href="https://www.instagram.com/lennertdev/"
											className="block text-lg font-bold hover:text-mahogany transition-colors"
										>
											Lennert Devlaminck
										</a>
									</div>
									<div className="space-y-2">
                                        <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                                            {t("home.whoWeAre.postProduction")}
                                        </span>
										<a
											href="https://www.instagram.com/charles115611/"
											className="block text-lg font-bold hover:text-mahogany transition-colors"
										>
											Charles Degraeuwe
										</a>
									</div>
								</div>

								<Link
									to="/about"
									className="inline-flex items-center gap-3 text-sm uppercase tracking-wider font-medium hover:gap-5 transition-all duration-300"
								>
									<span>{t("home.whoWeAre.moreAbout")}</span>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</Link>
							</div>

							<div className="relative h-80 md:h-[500px]">
								<div className="absolute inset-0 flex items-center justify-center">
									<img
										src={charles}
										alt="Charles"
										className="absolute w-48 md:w-64 h-60 md:h-80 object-cover shadow-2xl transform -rotate-6 -translate-x-8 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 cursor-pointer grayscale hover:z-40 hover:grayscale-0"
									/>
									<img
										src={lennert}
										alt="Lennert"
										className="absolute w-48 md:w-64 h-60 md:h-80 object-cover shadow-2xl transform rotate-6 translate-x-8 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 cursor-pointer z-10 hover:z-40 grayscale hover:grayscale-0"
									/>
									<img
										src={lennert2}
										alt="Team"
										className="absolute w-48 md:w-64 h-60 md:h-80 object-cover shadow-2xl transform translate-y-16 hover:translate-y-12 transition-all duration-500 cursor-pointer z-20 hover:z-40 grayscale hover:grayscale-0"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="px-6 md:px-16 py-20 md:py-32 bg-gradient-to-b from-transparent to-black/50">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-3xl sm:text-4xl md:text-6xl mb-4">
							{t("home.cta.title1")}
						</h2>
						<h2 className="font-sfpro font-stretch-extra-expanded font-bold uppercase text-3xl sm:text-4xl md:text-6xl mb-8 text-mahogany">
							{t("home.cta.title2")}
						</h2>
						<p className="text-base md:text-lg font-light text-white/70 max-w-2xl mx-auto mb-10">
							{t("home.cta.description")}
						</p>
						<Link
							to="/contact"
							className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-mahogany hover:text-white transition-all duration-300"
						>
							<span>{t("home.cta.button")}</span>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
					</div>
				</section>
			</div>
		</div>
		</>
	);
}