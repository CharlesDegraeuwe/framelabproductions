import "animate.css";
import { useTranslation } from "react-i18next";
import projects from "../../data/data";
import WorkItem from "./WorkItem.jsx";
import { useRef, useState } from "react";
import {Helmet} from "react-helmet-async";
import SEO from "../../seo/Seo.jsx";

export default function Work() {
	const { t } = useTranslation();

	const [sortedprojects, setSortedprojects] = useState(projects);
	const [toggledBed, setToggledBed] = useState(false);
	const [toggledVid, setToggledVid] = useState(false);
	const [toggledEv, setToggledEv] = useState(false);
	const select = useRef(null);

	const toggleVideo = () => {
		if (!toggledVid) {
			setSortedprojects(projects.filter((project) => project.type === "video"));
			setToggledVid(true);
			setToggledBed(false);
			setToggledEv(false);
		} else {
			setSortedprojects(projects);
			setToggledVid(false);
		}
	};

	const toggleBedrijf = () => {
		if (!toggledBed) {
			setSortedprojects(projects.filter((project) => project.type === "bedrijf"));
			setToggledBed(true);
			setToggledVid(false);
			setToggledEv(false);
		} else {
			setSortedprojects(projects);
			setToggledBed(false);
		}
	};

	const toggleEvent = () => {
		if (!toggledEv) {
			setSortedprojects(projects.filter((project) => project.type === "event"));
			setToggledEv(true);
			setToggledVid(false);
			setToggledBed(false);
		} else {
			setSortedprojects(projects);
			setToggledEv(false);
		}
	};

	const toggleDate = () => {
		const datum = select.current.value;
		if (datum === "alle") {
			setSortedprojects(projects);
		} else {
			setSortedprojects(projects.filter((project) => project.date === datum));
		}
	};

	return (<>
			<SEO page="work" />
			<div className="w-screen h-full flex items-center justify-center flex-row pt-30 md:pt-20 line-10">
				<div className="w-1/3 hidden md:flex h-full flex-col pl-10 animate-animated animate__fadeInUp">
					<div className="flex flex-col h-1/2 md:pt-20">
                    <span className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-5xl md:text-[8vh]">
                        {t("work.title1")}
                    </span>
						<span className="font-sfpro text-mahogany font-stretch-extra-expanded font-bold uppercase text-5xl/11 sm:text-6xl/ md:text-[15vh]/20">
                        {t("work.title2")}
                    </span>
					</div>
					<div className="flex flex-col h-1/2 justify-end pb-20 gap-3">
                    <span
						className={`cursor-pointer transition-colors hover:text-mahogany ${toggledBed ? "text-mahogany" : ""}`}
						onClick={toggleBedrijf}
					>
                        {t("work.filters.corporate")}
                    </span>
						<span
							className={`cursor-pointer transition-colors hover:text-mahogany ${toggledVid ? "text-mahogany" : ""}`}
							onClick={toggleVideo}
						>
                        {t("work.filters.shortFilms")}
                    </span>
						<span
							className={`cursor-pointer transition-colors hover:text-mahogany ${toggledEv ? "text-mahogany" : ""}`}
							onClick={toggleEvent}
						>
                        {t("work.filters.events")}
                    </span>
					</div>
				</div>
				<div className="w-full h-full md:w-2/3">
					<div className="w-full hidden md:flex min-h-20 max-h-20 flex flex-row items-center px-4">
						<div className="w-fit flex items-center gap-2 bg-white/5 rounded-4xl px-4 py-1 cursor-pointer">
							<select ref={select} className="" onChange={toggleDate}>
								<option value="alle">{t("work.filters.all")}</option>
								<option value="2025">2025</option>
								<option value="2024">2024</option>
							</select>
						</div>
					</div>
					<div className="w-full h-10 flex flex-row gap-2 md:hidden px-4">
                    <span className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-lg">
                        {t("work.title1")}
                    </span>
						<span className="font-sfpro font-stretch-extra-expanded font-bold uppercase">
                        {t("work.title2")}
                    </span>
					</div>
					<div className="w-full grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 pt-4 px-4">
						{sortedprojects.map((project, index) => (
							<WorkItem key={index} project={project} />
						))}
					</div>
				</div>
			</div>
	</>
	);
}