export const mainContacts = [
  {
    id: 1,
    label: "First Name",
    type: "text",
  },
  {
    id: 2,
    label: "Last Name",
    type: "text",
  },
  {
    id: 3,
    label: "Email",
    type: "email",
  },
  {
    id: 4,
    label: "Phone Number",
    type: "number",
  },
];

export const companyFields = [
  {
    id: 1,
    label: "Company Legal Name *",
  },
  {
    id: 2,
    label: "Website URL *",
  },
  {
    id: 3,
    label: "Are you willing to use private label?",
  },
  {
    id: 4,
    label: "State/Jurisdiction of Incorporation or Formation *",
  },
];

export const officeFields = [
  {
    id: 1,
    label: "City *",
  },
  {
    id: 2,
    label: "State/Province *",
  },
  {
    id: 3,
    label: "PO/ZIP *",
  },
  {
    id: 4,
    label: "Country *",
    countries: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "fr", label: "France" },
      { value: "ge", label: "Germany" },
    ],
  },
];

export const businessFields = [
  {
    id: 1,
    label: "How many products are in your catalog? *",
    options: [
      {
        value: "1",
        label: "0-10",
      },
      {
        value: "2",
        label: "10-25",
      },
      {
        value: "3",
        label: "25-50",
      },
      {
        value: "4",
        label: "50-100",
      },
      {
        value: "5",
        label: "100-200",
      },
      {
        value: "6",
        label: ">200",
      },
    ],
    isMulti: 0,
  },
  {
    id: 2,
    label: "What is your annual total revenue? *",
    options: [
      {
        value: "1",
        label: "<$1M",
      },
      {
        value: "2",
        label: "$1M-$5M",
      },
      {
        value: "3",
        label: "$5M-$10M",
      },
      {
        value: "4",
        label: "$10M-$25M",
      },
      {
        value: "5",
        label: "$25M-$50M",
      },
      {
        value: "6",
        label: "$50M-$100M",
      },
      {
        value: "7",
        label: ">$100M",
      },
    ],
    isMulti: 0,
  },
  {
    id: 3,
    label: "Do you sell anywhere else online? *",
    options: [
      {
        value: "1",
        label: "Amazon",
      },
      {
        value: "2",
        label: "Ebay",
      },
      {
        value: "3",
        label: "Walmart",
      },
      {
        value: "4",
        label: "Shopify",
      },
      {
        value: "5",
        label: "WooCommerce",
      },
      {
        value: "6",
        label: "BigCommerce",
      },
      {
        value: "7",
        label: "Magento",
      },
      {
        value: "8",
        label: "Opencart",
      },
      {
        value: "9",
        label: "Zencart",
      },
      {
        value: "10",
        label: "PrestaShop",
      },
      {
        value: "11",
        label: "Newegg",
      },
      {
        value: "12",
        label: "BestBuy",
      },
      {
        value: "13",
        label: "Other",
      },

    ],
    isMulti: 1,
  },
  {
    id: 4,
    label: "Do you offer products for commercial use? *",
    options: [
      {
        value: "1",
        label: "All",
      },
      {
        value: "2",
        label: "Some",
      },
      {
        value: "2",
        label: "None",
      },
    ],
    isMulti: 0,
  },
  {
    id: 5,
    label: "What type of seller are you? *",
    options: [
      {
        value: "1",
        label: "Manufacturer",
      },
      {
        value: "2",
        label: "Wholesaler",
      },
      {
        value: "2",
        label: "Retailer",
      },
    ],
    isMulti: 0,
  },
  {
    id: 6,
    label: "How did you learn about PremaFirm?",
    options: [
      {
        value: "1",
        label: "Search Engine",
      },
      {
        value: "2",
        label: "Linkedin",
      },
      {
        value: "3",
        label: "Word of mouth",
      },
      {
        value: "4",
        label: "Email",
      },
      {
        value: "5",
        label: "CFIB",
      },
      {
        value: "6",
        label: "EDC / BDC",
      },
      {
        value: "7",
        label: "Other",
      },
    ],
    isMulti: 0,
  },
];

export const requireFields = [
  {
    id: 1,
    label: "Do you currently dropship?",
    placeholder: "Select an option",
    options: [
      {
        value: "1",
        label: "YES",
      },
      {
        value: "2",
        label: "NO",
      },
    ],
  },
  {
    id: 2,
    label: "Do you have product liability insurance? ",
    placeholder: "Select an option",
    options: [
      {
        value: "1",
        label: "YES",
      },
      {
        value: "2",
        label: "NO",
      },
    ],
  },
  {
    id: 3,
    label: "What product categories do you offer?",
    placeholder: "Select categories",
    categories: [
      {
        value: "automotive_parts_accessories",
        label: "Automotive Parts & Accessories",
      },
      {
        value: "baby",
        label: "Baby",
      },
      {
        value: "beauty",
        label: "Beauty",
      },
      {
        value: "books",
        label: "Books",
      },
      {
        value: "camera_photo",
        label: "Camera & Photo",
      },
      {
        value: "cell_phones",
        label: "Cell Phones (Wireless)",
      },
      {
        value: "clothing_and_accessories",
        label: "Clothing and Accessories",
      },      
      {
        value: "consumer_electronics",
        label: "Consumer Electronics",
      },
      {
        value: "grocery_and_gourmet_food",
        label: "Grocery & Gourmet Food",
      },
      {
        value: "health_and_personal_care",
        label: "Health & Personal Care",
      },
      {
        value: "home_and_garden",
        label: "Home & Garden",
      },
      {
        value: "industrial_and_scientific",
        label: "Industrial and Scientific",
      },
      {
        value: "jewellery",
        label: "Jewellery",
      },
      {
        value: "large_appliances",
        label: "Large Appliances",
      },
      {
        value: "lawn_and_garden",
        label: "Lawn & Garden",
      },
      {
        value: "luggage_and_bags",
        label: "Luggage & Bags",
      },
      {
        value: "musical_instruments",
        label: "Musical Instruments",
      },
      {
        value: "office_products",
        label: "Office & Stationary Products",
      },
      {
        value: "personal_computers",
        label: "Personal Computers",
      },
      {
        value: "pet_supplies",
        label: "Pet Supplies",
      },
      {
        value: "shoes_and_handbags",
        label: "Shoes & Handbags",
      },
      {
        value: "software_and_video_games",
        label: "Software & Video Games",
      },
      {
        value: "sports_and_outdoors",
        label: "Sports & Outdoors",
      },
      {
        value: "tools_and_building_supplies",
        label: "Tools & Building Supplies",
      },
      {
        value: "toys_and_games",
        label: "Toys & Games",
      },
      {
        value: "video_and_dvd",
        label: "Video & DVD",
      },
      {
        value: "watches",
        label: "Watches",
      },
      {
        value: "other",
        label: "Other",
      },

    ],
  },
  {
    id: 4,
    label: "Do you accept returns?",
    placeholder: "Select an option",
    options: [
      {
        value: "1",
        label: "YES",
      },
      {
        value: "2",
        label: "NO",
      },
    ],
  },
];

export const businessMarket = [
  {
    value: "as",
    label: "Asia",
  },
  {
    value: "eu",
    label: "Europe",
  },
  {
    value: "af",
    label: "Africa",
  },
  {
    value: "na",
    label: "North America",
  },
  {
    value: "sa",
    label: "South America",
  },
  {
    value: "an",
    label: "Antarctia",
  },
  {
    value: "oc",
    label: "Oceania",
  },
];
export const businessFulfillment = [
  {
    value: "ca",
    label: "Canada",
  },
  {
    value: "us",
    label: "United States",
  },
  {
    value: "mx",
    label: "Mexico",
  },
  {
    value: "gb",
    label: "United Kingdom",
  },

];
export const defaultOptions = [
  {
    value: "1",
    label: "YES",
  },
  {
    value: "2",
    label: "NO",
  },
];
export const roleOptions = [
  {
    value: "1",
    label: "CEO",
  },
  {
    value: "2",
    label: "COO",
  },
  {
    value: "3",
    label: "Ecommerce Manager",
  },
  {
    value: "4",
    label: "General Manager",
  },
  {
    value: "5",
    label: "Sales Rep",
  },
  {
    value: "6",
    label: "Operation Manager",
  },
  {
    value: "7",
    label: "Customer Service Manager",
  },
  {
    value: "8",
    label: "Marketing Manager",
  },
  {
    value: "9",
    label: "Sales Manager",
  },
  {
    value: "10",
    label: "VP",
  },
  {
    value: "11",
    label: "Owner",
  },
  {
    value: "12",
    label: "President",
  },
  {
    value: "13",
    label: "Other",
  },
];
