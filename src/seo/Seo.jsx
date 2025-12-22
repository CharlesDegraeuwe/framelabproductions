import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { seoConfig, organizationSchema } from "./seo.config.js";

export default function SEO({ page, customTitle, customDescription }) {
	const { i18n } = useTranslation();
	const lang = i18n.language === "nl" ? "nl" : "en";

	const pageConfig = seoConfig.pages[page]?.[lang] || seoConfig.pages.home[lang];

	const title = customTitle || pageConfig.title;
	const description = customDescription || pageConfig.description;
	const url = `${seoConfig.siteUrl}${page === "home" ? "" : `/${page}`}`;
	const image = `${seoConfig.siteUrl}${seoConfig.defaultImage}`;

	return (
		<Helmet>
			<html lang={lang} />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={pageConfig.keywords} />

			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={seoConfig.siteName} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:url" content={url} />
			<meta property="og:locale" content={lang === "nl" ? "nl_BE" : "en_US"} />
			<meta property="og:locale:alternate" content={lang === "nl" ? "en_US" : "nl_BE"} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			{/* Technical */}
			<link rel="canonical" href={url} />
			<meta name="robots" content="index, follow" />
			<meta name="googlebot" content="index, follow" />

			{/* Mobile */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#000000" />

			{/* Structured Data */}
			<script type="application/ld+json">
				{JSON.stringify(organizationSchema)}
			</script>
		</Helmet>
	);
}