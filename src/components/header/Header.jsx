import { useState } from "react";
import { useTranslation } from "react-i18next";
import flp from "../../../public/assets/flp.png";
import framecloud from "../../../public/assets/framecloud.png";
import { Link, NavLink } from "react-router";

export default function Header() {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const toggleLanguage = () => {
		const newLang = i18n.language === "nl" ? "en" : "nl";
		i18n.changeLanguage(newLang);
	};

	return (
		<>
			<div className="fixed top-0 font-sfpro z-[999] w-screen min-h-20 flex items-center justify-between md:grid md:grid-cols-3 md:grid-rows-1 px-5 md:px-10 pt-5 md:pt-0">
				<Link to={"/home"} className="flex items-center">
					<img src={flp} alt="flp" className="h-8 md:h-10" />
				</Link>

				<div className="hidden md:flex font-mono font-bold items-center justify-center gap-10">
					<NavLink to={"/home"} className="w-23 text-center py-0.5 rounded-4xl backdrop-blur-xs">
						{t("nav.home")}
					</NavLink>
					<NavLink to={"/work"} className="w-23 text-center py-0.5 rounded-4xl backdrop-blur-xs">
						{t("nav.work")}
					</NavLink>
					<NavLink to={"/about"} className="w-23 text-center py-0.5 rounded-4xl backdrop-blur-xs">
						{t("nav.about")}
					</NavLink>
				</div>

				<div className="flex flex-row items-center justify-center md:justify-end">
					<div className="hidden md:flex flex-row items-center gap-6">
						{/* Language Switcher */}
						<button
							onClick={toggleLanguage}
							className="px-3 py-1 text-xs uppercase tracking-wider font-bold border border-white/30 hover:border-white hover:bg-white/10 transition-all"
						>
							{i18n.language === "nl" ? "EN" : "NL"}
						</button>

						<NavLink to={"/contact"} className="px-5 py-1.5 border-white font-bold border-2 text-sm backdrop-blur-sm">
							{t("nav.contactUs")}
						</NavLink>
						<div className="border-1 border-white min-h-5" />
						<Link to={"https://framecloud.be"} className="p-2 backdrop-blur-sm rounded-full">
							<img
								src={framecloud}
								alt=""
								className="invert brightness-0 h-5 hover:animate__infinite hover:animate__headShake"
							/>
						</Link>
					</div>

					{/* Animated Hamburger Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden relative w-10 h-10 flex items-center justify-center"
						aria-label="Toggle menu"
					>
						<div className="relative w-6 h-5 flex flex-col justify-between">
                            <span
								className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
									isOpen ? "rotate-45 translate-y-2" : ""
								}`}
							/>
							<span
								className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
									isOpen ? "opacity-0 scale-0" : ""
								}`}
							/>
							<span
								className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
									isOpen ? "-rotate-45 -translate-y-2" : ""
								}`}
							/>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-black/70 backdrop-blur-md z-[1000] transition-opacity duration-500 md:hidden ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={closeMenu}
			/>

			{/* Mobile Menu Panel */}
			<div
				className={`fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-bl from-black via-neutral-950 to-black z-[1001] transform transition-transform duration-500 ease-out md:hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Decorative Elements */}
				<div className="absolute top-0 right-0 w-64 h-64 bg-mahogany/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
				<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

				{/* Header */}
				<div className="relative flex items-center justify-between px-8 pt-8">
					<span className="text-xs uppercase tracking-[0.3em] text-white/40">{t("nav.menu")}</span>
					{/* Mobile Language Switcher */}
					<button
						onClick={toggleLanguage}
						className="px-3 py-1 text-xs uppercase tracking-wider font-bold border border-white/30 hover:border-white transition-all"
					>
						{i18n.language === "nl" ? "EN" : "NL"}
					</button>
				</div>

				{/* Navigation Links */}
				<nav className="relative flex flex-col px-8 pt-12">
					{[
						{ to: "/home", label: t("nav.home"), number: "01" },
						{ to: "/work", label: t("nav.work"), number: "02" },
						{ to: "/about", label: t("nav.about"), number: "03" },
						{ to: "/contact", label: t("nav.contact"), number: "04" },
					].map((item, index) => (
						<NavLink
							key={item.to}
							to={item.to}
							onClick={closeMenu}
							className={`group flex items-center gap-4 py-4 border-b border-white/10 transition-all duration-300 ${
								isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
							}`}
							style={{ transitionDelay: isOpen ? `${index * 75}ms` : "0ms" }}
						>
							<span className="text-xs text-white/30 font-mono">{item.number}</span>
							<span className="text-2xl font-miller italic font-light uppercase tracking-wide group-hover:text-mahogany transition-colors">
                                {item.label}
                            </span>
							<svg
								className="w-4 h-4 ml-auto text-white/20 group-hover:text-mahogany group-hover:translate-x-1 transition-all"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</NavLink>
					))}
				</nav>

				{/* Bottom Section */}
				<div
					className={`absolute bottom-0 left-0 right-0 px-8 pb-10 transition-all duration-500 ${
						isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
					}`}
					style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
				>
					{/* CTA Button */}
					<NavLink
						to={"/contact"}
						onClick={closeMenu}
						className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-mahogany hover:text-white transition-all duration-300"
					>
						<span>{t("nav.startProject")}</span>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</NavLink>

					{/* Footer Links */}
					<div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
						<Link to={"https://framecloud.be"} onClick={closeMenu} className="flex items-center gap-3 group">
							<img
								src={framecloud}
								alt="Framecloud"
								className="invert brightness-0 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
							/>
							<span className="text-xs text-white/50 group-hover:text-white transition-colors">
                                framecloud.be
                            </span>
						</Link>

						{/* Social Icons */}
						<div className="flex items-center gap-4">
							<a
								href="https://www.instagram.com/framelabproductions/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/40 hover:text-white transition-colors"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}