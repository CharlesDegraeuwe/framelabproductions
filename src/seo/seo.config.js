// SEO configuratie per pagina
// Gebruik: import { seoConfig } from './seo.config.js'

export const seoConfig = {
	siteUrl: "https://framelabproductions.com",
	siteName: "Framelab Productions",
	defaultImage: "/og-image.jpg",
	twitterHandle: "@framelabprod",

	pages: {
		home: {
			nl: {
				title: `Framelab Productions | Turning Moments into Motion`,
				description: "Professionele videoproductie in België. Wij creëren impactvolle bedrijfsvideo's, trouwfilms, muziekvideo's en evenementregistraties. Van concept tot eindproduct.",
				keywords: "videoproductie België, videograaf Gent, bedrijfsvideo, trouwfilm, muziekvideo, evenementvideo, drone opnames"
			},
			en: {
				title: `Framelab Productions | Turning Moments into Motion`,
				description: "Professional video production in Belgium. We create impactful corporate videos, wedding films, music videos and event coverage. From concept to final product.",
				keywords: "video production Belgium, videographer Ghent, corporate video, wedding film, music video, event video, drone footage"
			}
		},
		work: {
			nl: {
				title: "Ons Werk | Framelab Productions",
				description: "Bekijk ons portfolio: muziekvideo's, bedrijfsfilms, trouwfilms en documentaires. Ontdek de projecten die we hebben gerealiseerd voor onze klanten.",
				keywords: "videoportfolio, muziekvideo's België, bedrijfsvideo voorbeelden, trouwfilm portfolio"
			},
			en: {
				title: "Our Work | Framelab Productions",
				description: "View our portfolio: music videos, corporate films, wedding films and documentaries. Discover the projects we've created for our clients.",
				keywords: "video portfolio, music videos Belgium, corporate video examples, wedding film portfolio"
			}
		},
		about: {
			nl: {
				title: "Over Ons | Framelab Productions",
				description: "Maak kennis met Lennert en Charles van Framelab Productions. Sinds 2022 combineren wij cinematografie en post-productie tot visueel impactvolle content.",
				keywords: "videograaf team, Framelab team, videoproductie Gent, creatief duo"
			},
			en: {
				title: "About Us | Framelab Productions",
				description: "Meet Lennert and Charles from Framelab Productions. Since 2022 we combine cinematography and post-production into visually impactful content.",
				keywords: "videographer team, Framelab team, video production Ghent, creative duo"
			}
		},
		contact: {
			nl: {
				title: "Contact | Framelab Productions",
				description: "Neem contact op voor uw videoproductie project. Wij helpen u graag met bedrijfsvideo's, trouwfilms, muziekvideo's en meer. Vrijblijvende offerte.",
				keywords: "contact videograaf, offerte videoproductie, videograaf inhuren België"
			},
			en: {
				title: "Contact | Framelab Productions",
				description: "Get in touch for your video production project. We're happy to help with corporate videos, wedding films, music videos and more. Free quote.",
				keywords: "contact videographer, video production quote, hire videographer Belgium"
			}
		}
	}
};

export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "VideoProductionCompany",
	"name": "Framelab Productions",
	"url": "https://framelabproductions.com",
	"logo": "https://framelabproductions.com/assets/flp.png",
	"description": "Professionele videoproductie in België",
	"foundingDate": "2022",
	"founders": [
		{
			"@type": "Person",
			"name": "Lennert Devlaminck",
			"jobTitle": "Cinematographer"
		},
		{
			"@type": "Person",
			"name": "Charles Degraeuwe",
			"jobTitle": "Post-Production Specialist"
		}
	],
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Gent",
		"addressRegion": "Oost-Vlaanderen",
		"addressCountry": "BE"
	},
	"contactPoint": {
		"@type": "ContactPoint",
		"telephone": "+32-474-160-059",
		"email": "framelabproductions@gmail.com",
		"contactType": "customer service"
	},
	"sameAs": [
		"https://www.instagram.com/framelabproductions/"
	],
	"priceRange": "€€",
	"areaServed": {
		"@type": "Country",
		"name": "Belgium"
	},
	"knowsAbout": [
		"Video Production",
		"Cinematography",
		"Wedding Videography",
		"Corporate Video",
		"Music Video Production",
		"Drone Videography",
		"Color Grading",
		"Video Editing"
	]
};