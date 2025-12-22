import { useTranslation } from "react-i18next";
import {Helmet} from "react-helmet-async";
import SEO from "../../seo/Seo.jsx";

export default function Contact() {
	const { t, i18n } = useTranslation();

	return (<>
			<SEO page="contact" />

			<div className="w-full h-full px-20 flex flex-col gap-5 justify-center items-center">
				<span className="font-sfpro text-mahogany font-stretch-extra-expanded font-bold uppercase text-5xl/11 sm:text-6xl/ md:text-[7vh]/17">
					{t("contact.title")}
				</span>
				<a
					href="mailto:framelabproductions@gmail.com"
					className="font-sfpro text-2xl font-bold hover:text-mahogany transition-colors"
				>
					{t("contact.emailUs")}
				</a>
				<a
					href="tel:32474160059"
					className="font-sfpro text-2xl font-bold hover:text-mahogany transition-colors"
				>
					{t("contact.callUs")}
				</a>
				<a
					href="https://www.instagram.com/framelabproductions/"
					className="font-sfpro text-2xl font-bold hover:text-mahogany transition-colors"
				>
					{t("Instagram")}
				</a>
			</div>
		</>
	);
}