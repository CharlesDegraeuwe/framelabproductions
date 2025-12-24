import { useTranslation } from "react-i18next";
import lennert from "../../../public/assets/about/lennert.jpeg";
import charles from "../../../public/assets/about/charles.jpg";
import lennert2 from "../../../public/assets/about/diefte.jpg";
import {Helmet} from "react-helmet-async";
import SEO from "../../seo/Seo.jsx";

export default function About() {
	const { t } = useTranslation();
	const date = new Date().getFullYear();
	const years = date - 2022;

	return (<>
			<SEO page="about" />
		<div className="w-full h-full flex flex-col gap-2 px-4 pt-40 md:px-10 md:pt-20 items-center justify-center font-sfpro">
			<div className="w-full flex flex-row items-centrum gap-3 pt-40 md:pt-0 md:gap-5">
                <span className="font-miller font-stretch-extra-expanded font-extralight uppercase italic text-5xl sm:text-6xl md:text-[8vh]">
                    {t("about.title1")}
                </span>
				<span className="font-sfpro text-mahogany font-stretch-extra-expanded font-bold uppercase text-5xl/11 sm:text-6xl/ md:text-[7vh]/17">
                    {t("about.title2")}
                </span>
			</div>
			<div className="w-full md:h-1/2 flex flex-col md:flex-row gap-4 md:gap-2">
				<div className="w-full md:w-1/2 h-full flex flex-col">
					<div className="h-auto md:h-1/2 w-full flex flex-col gap-2 mb-4 md:mb-0">
						<span className="opacity-50 font-light">{t("about.cinematography")}</span>
						<a href="https://www.instagram.com/lennertdev/">
							<span className="text-xl font-bold">Lennert Devlaminck</span>
						</a>
					</div>
					<div className="h-auto md:h-1/2 w-full flex flex-col gap-2">
						<span className="opacity-50 font-light">{t("about.postProduction")}</span>
						<a href="https://www.instagram.com/charles115611/">
							<span className="text-xl font-bold">Charles Degraeuwe</span>
						</a>
						<span title={"ondernemingsnummer"} className={"opacity-30 font-light"}>1031.978.347</span>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-full flex flex-col gap-5 mt-4 md:mt-0">
					<div className="text-base md:text-lg/7 h-fit font-light">
						<p>{t("about.description.line1", { years })}</p>
						<p>{t("about.description.line2")}</p>
						<p>{t("about.description.line3")}</p>
						<p>{t("about.description.line4")}</p>
						<p>{t("about.description.line5")}</p>
						<p>{t("about.description.line6")}</p>
					</div>
				</div>
			</div>
			<div className="h-1/2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 sm:grid-rows-2 md:grid-rows-1 gap-4 md:gap-10 mt-4 md:mt-0">
				<img src={lennert} alt="Lennert" className="w-full h-full object-cover rounded-sm" />
				<img src={charles} alt="Charles" className="w-full h-full object-cover rounded-sm saturate-0" />
				<img src={lennert2} alt="Team" className="w-full h-full object-cover rounded-sm saturate-0" />
			</div>
		</div>
		</>
	);
}