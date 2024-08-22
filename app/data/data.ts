export const navMenuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About OIA",
    path: "/about",
  },
  {
    title: "Governance",
    path: "/governance",
  },
  {
    title: "OIA Impact",
    path: "/oia-impact",
    submenu: true,
    submenuItems: [
      { title: "In-Country Value", path: "/oia-impact/in-country-value" },
      { title: "Economic Diversification", path: "/oia-impact/economic-diversification" },
    ],
  },
  {
    title: "Our Investments",
    path: "/our-investments",
  },
  {
    title: "Potential",
    path: "/potential",
  },
  {
    title: "Media Center",
    path: "/media-center",
  },
  {
    title: "Oman",
    path: "/oman",
  },
  {
    title: "Careers",
    path: "/careers",
  },
  {
    title: "Contact Us",
    path: "/media/contact-us",
  },
];
export const homeDetailData = [
  {
    id: 1,
    title: "Where to stay",
    list: [
      { id: 1, name: "Masira Island Resort" },
      { id: 2, name: "Atana Stay Al Ashkhara" },
      { id: 3, name: "Millennium Executive Apartments" },
      { id: 4, name: "Fraser Suites Muscat " },
      { id: 5, name: "Ras Al Jinz Turtle Reserve" },
    ],
  },
  {
    id: 2,
    title: "What to do",
    list: [
      { id: 1, name: "Bedouin House Desert Visit " },
      { id: 2, name: "Omani Family Cooking Class" },
      { id: 3, name: "Sunrise Desert Yoga" },
      { id: 4, name: "Amouage Fragrances Factory Visit" },
     
    ],
  },
  {
    id: 3,
    title: "What to see",
    list: [
      { id: 1, name: "Royal Opera House Muscat" },
      { id: 2, name: "The National Museum " },
      { id: 3, name: "Al Hoota Cave " },
      { id: 4, name: "Amouage Perfumery " },
      { id: 5, name: "Snake Canyon " },

    ],
  },
];
export const omanLocDetail = [
  {
    id: 1,
    title: "Where to Stay",
    list: [
      { id: 1, name: "Masira Island Resort" },
      { id: 2, name: "Atana Stay Al Ashkara" },
      { id: 3, name: "Millennium Executive Apartments" },
      { id: 4, name: "Fraser Suites Muscat" },
      { id: 5, name: "Ras Al Jinz Turtle Reserve" },
      

    ],
  },
  {
    id: 2,
    title: "What to do",
    list: [
      { id: 1, name: "Masira Island Resort" },
      { id: 2, name: "Atana Stay Al Ashkara" },
      { id: 3, name: "Millennium Executive Apartments" },
      { id: 4, name: "Fraser Suites Muscat" },
      { id: 5, name: "Ras Al Jinz Turtle Reserve" },
    ],
  },
  {
    id: 3,
    title: "What to see",
    list: [
      { id: 1, name: "Masira Island Resort" },
      { id: 2, name: "Atana Stay Al Ashkara" },
      { id: 3, name: "Millennium Executive Apartments" },
      { id: 4, name: "Fraser Suites Muscat" },
      { id: 5, name: "Ras Al Jinz Turtle Reserve" },

    ],
  },
]
export const joinVisitOmanDetails = [
  {
    id: 1,
    title: "Why JOIN visit Oman?",
    list: [
      { id: 1, name: "Oman, a jewel of the Arabian Peninsula, offers a unique blend of ancient heritage and modern charm. Here are some compelling reasons to visit this captivating country:" },
      { id: 2, subTitle:"Rich Culture and History", name: "Oman is a treasure trove of ancient forts, castles, and bustling souks. Explore UNESCO World Heritage sites and experience vibrant Omani traditions and hospitality." },
      { id: 3, subTitle:"Stunning Natural Beauty", name: "From the Al Hajar Mountains and serene beaches to the Wahiba Sands desert and lush wadis, Oman's landscapes are breathtakingly diverse." },
      { id: 4, subTitle:"Adventure Awaits", name: "Hiking, dune bashing, diving, and cave exploring – Oman offers endless outdoor activities for adventure seekers." },
      { id: 5, subTitle:"Warm and Welcoming People", name: "Experience the legendary hospitality of Omanis, known for their friendliness and generosity." },
      {
        id:6, subTitle:"Unique Experiences", name:"Enjoy traditional Omani cuisine, vibrant festivals, and wildlife sightings, including the endangered Arabian Oryx and playful dolphins."
      },
      {
        id:7,
        subTitle:"Safe and Accessible",
        name:"Oman is one of the safest countries in the region, with modern amenities and well-maintained infrastructure for hassle-free travel."
      },
      {
        id:8,
        subTitle:"Modern Meets Traditional",
        name:"Oman blends the old with the new, offering luxury in modern cities like Muscat while preserving the timeless beauty of traditional villages."
      },{
        id:9,
        name:"Discover the magic of Oman – where every visit is a journey through time, nature, and tradition. Plan your trip now!"
      }
    ],
  }
]
export const navBarDropdown = [
  {
    id: 1,
    key: 'about-us',
    name: 'About Us',
    url: '',
    icon: '/assets/icons/nav-about.svg',
    subMenu: [
      {
        id: 1,
        key: 'vision_mission_and_value',
        name: "Vision, Mission & Values",
        url: '/about-us/vision-mission',
        img: '/assets/images/nav-about-us.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 2,
        key: 'executive_summary',
        name: "Executive Summary",
        url: '/about-us/executive-summary',
        img: '/assets/images/nav-about-us.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 3,
        key: 'executive_team',
        name: "Executive Team",
        url: '/about-us/executive-team',
        img: '/assets/images/nav-about-us.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 4,
        key: 'md_message',
        name: "MD's Message",
        url: '/about-us/md-message',
        img: '/assets/images/nav-about-us.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 5,
        key: 'tourism_provider',
        name: "Tourism Provider",
        url: '/about-us/partner',
        img: '/assets/images/nav-about-us.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      }
    ]
  },
  {
    id: 2,
    key: 'discover_oman',
    name: 'Discover Oman',
    url: '',
    icon: '/assets/icons/nav-discover.svg',

    subMenu: [
      {
        id: 1,
        key: 'location_and_map',
        name: "Location & Map",
        url: '/discover-oman/location-map',
        img: '/assets/images/nav-discover-oman.svg',
        description: 'The natural landscape of Oman is unlike any other place on earth and captivates visitors with its breathtaking scenery.'
      },
      {
        id: 2,
        key: 'enviroment',
        name: "Environment",
        url: '/discover-oman/environment',
        img: '/assets/images/nav-discover-oman.svg',
        description: 'The natural landscape of Oman is unlike any other place on earth and captivates visitors with its breathtaking scenery.'
      },
      {
        id: 3,
        key: 'seasons',
        name: "Seasons",
        url: '/discover-oman/seasons',
        img: '/assets/images/nav-discover-oman.svg',
        description: 'The natural landscape of Oman is unlike any other place on earth and captivates visitors with its breathtaking scenery.'
      },

    ]
  },
  {
    id: 3,
    key: 'our_services',
    name: 'Services',
    url: '',
    icon: '/assets/icons/nav-services.svg',

    subMenu: [
      {
        id: 1,
        key: 'flight',
        name: "Flights",
        url: '/flights',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 2,
        key: 'accomodation',
        name: "Accommodation",
        url: '/accomodation',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 3,
        key: 'tours',
        name: "Tours",
        url: '/tours',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 4,
        key: 'attraction',
        name: "Attractions",
        url: '/attractions',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 5,
        key: 'transportation',
        name: "Transportation",
        url: '/transportation',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 6,
        key: 'dining',
        name: "Dining",
        url: '/dining',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
    ]
  },
  {
    id: 4,
    key: 'useful_info',
    name: 'Useful Info',
    url: '',
    icon: '/assets/icons/nav-info.svg',

    subMenu: [
      {
        id: 1,
        key: 'travel_tips',
        name: "Travel Tips",
        url: '/useful-info/travel-tips',
        img: '/assets/images/nav-useful-info.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 2,
        key: 'visa_information',
        name: "Visa Information",
        url: '/useful-info/visa-info',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 3,
        key: 'weather_and_climate',
        name: "Weather & Climate",
        url: '/useful-info/weather',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 4,
        key: 'news',
        name: "News",
        url: '/media/latest-news',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 5,
        key: 'faqs',
        name: "FAQs",
        url: '/media/faq',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 6,
        key: 'contact_us',
        name: "Contact Us",
        url: '/media/contact-us',
        img: '/assets/images/nav-our-service.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
    ]
  },
  {
    id: 5,
    key: 'registration',
    name: 'Registration',
    url: '',
    icon: '/assets/icons/nav-register-secondary.svg',
    subMenu: [
      {
        id: 1,
        key: 'trade_partner',
        name: "Trade Partners",
        url: 'https://booking.visitoman.om/agent-registration.aspx',
        img: '/assets/images/nav-useful-info.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
      {
        id: 2,
        key: 'suppliers',
        name: "Tourism Providers",
        url: '/suppliers',
        img: '/assets/images/nav-useful-info.svg',
        description: 'Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman'
      },
    ]
  }
]
export const dhofarData = [
  { id: 1, name: 'Explore Wadi Darbat' },
  { id: 2, name: 'Visit the Salalah Museum' },
  { id: 3, name: 'Visit the Salalah Museum' },
  { id: 4, name: 'Go on a desert safari' },
  { id: 5, name: 'Explore Wadi Darbat' },
  { id: 6, name: 'Visit the Salalah Museum' },
  { id: 7, name: 'Visit the Salalah Museum' },
  { id: 8, name: 'Go on a desert safari' },


]
export const footerSocial = [
  { id: 1, src: 'https://visitoman.s3.me-south-1.amazonaws.com/footer_youtube_9f80368325.svg', link: '', alt: 'youtube' },
  { id: 2, src: 'https://visitoman.s3.me-south-1.amazonaws.com/footer_instagram_b3f1d29144.svg', link: 'https://www.instagram.com/visitoman_om/', alt: 'instagram' },
  { id: 3, src: 'https://visitoman.s3.me-south-1.amazonaws.com/footer_twitter_98c10b7451.svg', link: 'https://x.com/visitoman_vo', alt: 'twitter' },
  { id: 4, src: 'https://visitoman.s3.me-south-1.amazonaws.com/footer_linkedin_55a206d666.svg', link: 'https://www.linkedin.com/company/visitoman1/', alt: 'linkedin' },
  { id: 5, src: 'https://visitoman.s3.me-south-1.amazonaws.com/footer_facebook_e9e535e10f.svg', link: 'https://www.facebook.com/visitoman.vo/', alt: 'facebook' },

]
export const   latestCardData = [
  {
    id: 1,
    img: "/assets/images/latest-news/latest-news-img-1.png",
    title:
      "Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
    date: "30 June, 2024",
    desc: "The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman. Coinciding...",
    redmorebtn: "Read more",
    detail:{
      img: "/assets/images/latest-news/latest-news-img-1.png",
      title:"Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
      date:"30 June, 2024",
      paras:[
          {
              id:1,
              text:"The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman",
          },
          {
              id:2,
              text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
          },
          {
              id:3,
              text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
          },
          {
              id:4,
              text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
          }
      ]
    }
  },
  {
    id: 2,
    img: "/assets/images/latest-news/latest-news-img-2.png",
    title:
      "Visit Oman Inks Agreement With DidaTravel to Expand Into the Chinese Market",
    date: "11 March, 2024",
    desc: "The National Travel Operator - Visit Oman announced the signing of a Memorandum of Understanding (MOU) with DidaTravel, a leading B2B travel wholesaler. The announcement took place at ITB Berlin,…",
    redmorebtn: "Read more",
    detail:{
      img: "/assets/images/latest-news/latest-news-img-1.png",
      title:"Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
      date:"30 June, 2024",
      paras:[
          {
              id:1,
              text:"The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman",
          },
          {
              id:2,
              text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
          },
          {
              id:3,
              text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
          },
          {
              id:4,
              text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
          }
      ]
    }
  },
  {
      id: 3,
      img: "/assets/images/latest-news/latest-news-img-2.png",
      title:
        "Visit Oman Positions for Global Tourism Growth through collaboration with TBO.com",
      date: "10 March, 2024",
      desc: "Visit Oman announced a partnership with TBO.com, which is one of the leading global travel distribution platforms, with presence in over 100 countries. This collaboration aims to propel Omani tourism…",
      redmorebtn: "Read more",
      detail:{
        img: "/assets/images/latest-news/latest-news-img-1.png",
        title:"Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
        date:"30 June, 2024",
        paras:[
            {
                id:1,
                text:"The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman",
            },
            {
                id:2,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:3,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:4,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            }
        ]
      }
    },
    {
      id: 4,
      img: "/assets/images/latest-news/latest-news-img-3.png",
      title:
        "Visit Oman Announces Partnership with Headout to Expand Reach Across Continents",
      date: "9 March, 2024",
      desc: "The National Travel Operator - Visit Oman joins forces with Headout, a leading online marketplace that connects people all around the world with high-quality real-life experiences. This partnership aims to…",
      redmorebtn: "Read more",
      detail:{
        img: "/assets/images/latest-news/latest-news-img-1.png",
        title:"Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
        date:"30 June, 2024",
        paras:[
            {
                id:1,
                text:"The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman",
            },
            {
                id:2,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:3,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:4,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            }
        ]
      }
    },
    {
      id: 5,
      img: "/assets/images/latest-news/latest-news-img-4.png",
      title:
        "Visit Oman Announces Partnership with Civitatis to Expand Global Reach",
      date: "5 March, 2024",
      desc: "Visit Oman announced the commencement of its operations with Civitatis, the leading curated B2B2C marketplace for guided tours and excursions in English, Spanish, Portuguese, Italian, and French with more than…",
      redmorebtn: "Read more",
      detail:{
        img: "/assets/images/latest-news/latest-news-img-1.png",
        title:"Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
        date:"30 June, 2024",
        paras:[
            {
                id:1,
                text:"The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman",
            },
            {
                id:2,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:3,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:4,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            }
        ]
      }
    },
    {
      id: 6,
      img: "/assets/images/latest-news/latest-news-img-5.png",
      title:
        "Visit Oman Enhances Spanish Market Presence at Fitur 2024",
      date: "29 January, 2024",
      desc: "The world's tourism professionals and attendees discovered Oman's attractive landscapes and vibrant cultural scene at the 44th edition of Fitur, the annual International Tourism Fair held in Spain by IFEMA…",
      redmorebtn: "Read more",
      detail:{
        img: "/assets/images/latest-news/latest-news-img-1.png",
        title:"Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
        date:"30 June, 2024",
        paras:[
            {
                id:1,
                text:"The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman",
            },
            {
                id:2,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:3,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:4,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            }
        ]
      }
    },
    {
      id: 7,
      img: "/assets/images/latest-news/latest-news-img-6.png",
      title:
        "Attraction World Group Forms New",
      date: "13 November, 2023",
      desc: "At this year's World Travel Market (WTM), Visit Oman, the Sultanate of Oman's trusted B2B travel booking platform, proudly announced a dynamic new partnership with Attraction World Group (AWG), a…",
      redmorebtn: "Read more",
      detail:{
        img: "/assets/images/latest-news/latest-news-img-1.png",
        title:"Experience Oman with 'Live the Vibe' Summer Tourism Campaign",
        date:"30 June, 2024",
        paras:[
            {
                id:1,
                text:"The Ministry of Heritage and Tourism (MoHT), in collaboration with Visit Oman and OMRAN Group, officially launched the region's exciting new summer tourism campaign: 'Live the Vibe' in Oman",
            },
            {
                id:2,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:3,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            },
            {
                id:4,
                text:"Coinciding with the start of the Khareef Dhofar season, the launch of the 'Live the Vibe' campaign seeks to invigorate domestic and regional tourism within Oman. Targeting visitors from key GCC markets like UAE, KSA, and Kuwait, the campaign shines a spotlight on the Sultanate of Oman's diverse tourism offerings, solidifying its position as a premier summer destination for both local and regional visitors. The campaign highlights the various attractions that has moderate temperatures including Al Jabal Al-Akhdar, Jabal Shams, A'Sharqiyah South, in addition to indoor entertainment centres, shopping malls and adventure and sea activities.",
            }
        ]
      }
    },
];
// export const footerLinks = [
//   { id: 1, name: 'Home', link: '' },
//   { id: 2, name: 'About Us', link: '' },
//   { id: 3, name: 'Vision, Mission & Values', link: '' },
//   { id: 4, name: 'Executive Summary', link: '' },
//   { id: 5, name: `MD's Message`, link: '' },
//   { id: 6, name: 'Agency Partners', link: '' },
//   { id: 7, name: 'Discover Oman', link: '' },
//   { id: 8, name: 'Location & Map', link: '' },
//   { id: 9, name: 'Environment', link: '' },
//   { id: 10, name: 'Seasons', link: '' },
//   { id: 11, name: 'Travel Tips', link: '' },
//   { id: 12, name: 'Visa Information', link: '' },
//   { id: 13, name: 'Flights', link: '' },
//   { id: 14, name: 'Accommodation', link: '' },
//   { id: 15, name: 'Tours', link: '' },
//   { id: 16, name: 'Attractions', link: '' },
//   { id: 17, name: 'Transportations', link: '' },
//   { id: 18, name: 'Dining', link: '' },
//   { id: 19, name: 'Weather', link: '' },
//   { id: 20, name: 'News', link: '' },
//   { id: 21, name: 'Blogs', link: '' },
//   { id: 22, name: 'Contact Us', link: '' },
// ]
export const footerLinks = [
  { id: 1, name: 'About Visit Oman', link: '/about-us/vision-mission' },
  { id: 2, name: 'Privacy Policy', link: '/privacy-policy' },
  { id: 3, name: 'Terms & Conditions', link: '/terms-and-conditions' },
  { id: 4, name: 'Travel Tips', link: '/useful-info/travel-tips' },
  { id: 5, name: `Visa Information`, link: '/useful-info/visa-info' },
  { id: 6, name: 'Latest News', link: '/media/latest-news' },
  { id: 7, name: 'Contact Us', link: '/media/contact-us' },
  { id: 8, name: 'Careers', link: '/careers' },
  { id: 9, name: 'FAQs', link: '/media/faq' },


]
export const omanMapData = [
  {
    id: 1, name: 'Dhofar', imgSrc: '/assets/images/home/dhofar.svg', key: 'dhofar',
    mobileImg: '/assets/images/home/dhofar-mobile.svg',
    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },

      { id: 3, name: 'Explore Wadi Darbat' },
      { id: 4, name: 'Visit the Salalah Museum' },
      { id: 5, name: 'Visit the Salalah Museum' },
      { id: 6, name: 'Go on a desert safari' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 2, name: 'Al Wusta', imgSrc: '/assets/images/home/alwusta.svg', key: 'alWusta',
    mobileImg: '/assets/images/home/alwusta-mobile.svg',

    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },

    ]
  },
  {
    id: 3, name: 'Kiriya Muriya Island', imgSrc: '/assets/images/home/dhofar.svg',
    mobileImg: '/assets/images/home/dhofar-mobile.svg',

    places: [
      { id: 1, name: 'Visit the Salalah Museum' },
      { id: 2, name: 'Go on a desert safari' },
      { id: 3, name: 'Explore Wadi Darbat' },
      { id: 4, name: 'Visit the Salalah Museum' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },

      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 4, name: 'Ad Dhahirah', imgSrc: '/assets/images/home/alwusta.svg', key: 'adDhahirah',
    mobileImg: '/assets/images/home/addhahirah-mobile.svg',

    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 5, name: 'Ad Dhakhiliyah', imgSrc: '/assets/images/home/dhofar.svg', key: 'adDakhiliya',
    mobileImg: '/assets/images/home/aldhakhiliyah-mobile.svg',

    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 6, name: 'Ash Sharqiyah North', imgSrc: '/assets/images/home/alwusta.svg', key: 'ashSharqiyahNorth',
    mobileImg: '/assets/images/home/alwusta-mobile.svg',
    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 7, name: 'Ash Sharqiyah South', imgSrc: '/assets/images/home/dhofar.svg', key: 'ashSharqiyahSouth',
    mobileImg: '/assets/images/home/addhahirah-mobile.svg',

    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 8, name: 'Muscat', imgSrc: '/assets/images/home/alwusta.svg',
    mobileImg: '/assets/images/home/addhahirah-mobile.svg',

    key: 'muscat', places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 9, name: 'Al Batinah South', imgSrc: '/assets/images/home/dhofar.svg', key: 'alBatinahSouth',
    mobileImg: '/assets/images/home/alwusta-mobile.svg',

    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 10, name: 'Al Batinah North', imgSrc: '/assets/images/home/alwusta.svg', key: 'alBatinahNorth',
    mobileImg: '/assets/images/home/addhahirah-mobile.svg',

    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 11, name: 'Al Burami', imgSrc: '/assets/images/home/dhofar.svg', key: 'alBurami',
    mobileImg: '/assets/images/home/addhahirah-mobile.svg',
    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 12, name: 'Musandam', imgSrc: '/assets/images/home/alwusta.svg', key: 'musandam',
    mobileImg: '/assets/images/home/alwusta-mobile.svg',

    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 13, name: 'Al Burami North', imgSrc: '/assets/images/home/dhofar.svg', key: 'alBuramiNorth',
    mobileImg: '/assets/images/home/addhahirah-mobile.svg',
    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
  {
    id: 14, name: 'Mashirah Island', imgSrc: '/assets/images/home/alwusta.svg', key: 'mashirahIsland',
    mobileImg: '/assets/images/home/addhahirah-mobile.svg',
    places: [
      { id: 1, name: 'Explore Wadi Darbat' },
      { id: 2, name: 'Visit the Salalah Museum' },
      { id: 3, name: 'Visit the Salalah Museum' },
      { id: 4, name: 'Go on a desert safari' },
      { id: 5, name: 'Explore Wadi Darbat' },
      { id: 6, name: 'Visit the Salalah Museum' },
      { id: 7, name: 'Visit the Salalah Museum' },
      { id: 8, name: 'Go on a desert safari' },
    ]
  },
]
export const entities = [{label:"Travel Agent"}, {label:" Tour Operator"}, {label:"Non IATA Agent"}, {label:"Supplier"}]
export const forecastCities = [{label:"Muscat", value:"258638"},{lable:"Musandam", value:"258843"},{label:"Al Buraimi", value:"321634"},{label:"A'Sharqiyah", value:"256960"}, {label:"Al Batinah", value:"256752"}, {label:"Al Dakhiliyah", value:"256684"}, {label:"Al Dhahirah",value:"257039"}, {label:"Al Wusta", value:"256811"}, {label:"Dhofar",value:"261623"}]
export const countries= [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];