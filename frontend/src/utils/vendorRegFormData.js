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
        label: "0-100",
      },
      {
        value: "2",
        label: "100-250",
      },
      {
        value: "3",
        label: "250-500",
      },
      {
        value: "4",
        label: "500-1000",
      },
      {
        value: "5",
        label: "1000-2000",
      },
      {
        value: "6",
        label: ">2000",
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
        label: "Walmart",
      },
      {
        value: "3",
        label: "Home Depot",
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
    label: "How did you learn about Wayfair?",
    options: [
      {
        value: "1",
        label: "Acticle or Blog",
      },
      {
        value: "2",
        label: "Linkedin",
      },
      {
        value: "2",
        label: "Search Engine",
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
        value: "furniture",
        label: "Furniture",
      },
      {
        value: "outdoor",
        label: "Outdoor",
      },
      {
        value: "bedBath",
        label: "Bed & Bath",
      },
      {
        value: "kitchen",
        label: "Kitchen",
      },
      {
        value: "pet",
        label: "Pet",
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
    value: "ca",
    label: "Canada",
  },
  {
    value: "us",
    label: "United States",
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
    label: "Account Manager",
  },
  {
    value: "3",
    label: "COO",
  },
  {
    value: "4",
    label: "Customer Service Manager",
  },
];
