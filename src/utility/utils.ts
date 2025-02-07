import { IJob } from "@/types/schema/job";

// should return query string with given filter object
export const renderQueryKey = (queryKeys: any[]) => {
  const newQueryKeys = queryKeys;

  queryKeys.forEach((item, i) => {
    if (!item || item === "" || (typeof item === "object" && Object.keys(item).length === 0)) {
      newQueryKeys.splice(i, 1);
    }
  });

  return newQueryKeys;
};

// should return query string with given filter object
export const filteringMethod = (filterItems: any) => {
  if (!filterItems) {
    return "";
  }
  let queryParams = "";
  const hasLength = Object.keys(filterItems).length !== 0;
  // if empty
  if (!hasLength) {
    return "";
  }
  if (hasLength) {
    queryParams += "?";
  }

  Object.keys(filterItems).forEach((item, i) => {
    if (!filterItems[item]) {
      return;
    }

    if (i !== 0 && queryParams !== "?") {
      queryParams += "&";
    }

    queryParams = `${queryParams + item}=${filterItems[item]}`;
  });

  return queryParams === "?" ? "" : queryParams;
};

// should return string with given date
export const handleDate = (val: string) => {
  const date = new Date(val);
  return date
    .toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })
    .replace(",", "");
};

// should return capitalize string
export const handleCapitalize = (val: string) => {
  return val
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// should return capitalize string
export const fakeJob = (title: string, categoryName: string): IJob => {
  return {
    id: 424589,
    title: title,
    featured: false,
    datePosted: "2025-02-07T13:02:49.000Z",
    expirationDate: "2025-03-07T13:02:49.000Z",
    employmentType: "FULL_TIME",
    positionLevel: "UNKNOWN",
    company: {
      id: 3116,
      name: "Tech Consulting",
      industry: "IT Services and IT Consulting",
      description: "",
      address: "",
      phone: "",
      email: "",
      size: 0,
      imageId: 167138,
      imageURL:
        "https://media.licdn.com/dms/image/v2/D4D0BAQGWqy62p3pYzg/company-logo_100_100/company-logo_100_100/0/1695233033644/techconsultingusa_logo?e=2147483647&v=beta&t=rpKCltxf0QgS9LRBARInjNiw6vlAEqegrSUfxdGvUfk",
    },
    country: "UNITED_STATES",
    location: "Los Angeles, CA",
    category: {
      id: 4,
      name: categoryName,
      slug: "development-and-it",
      icon: "",
    },
    subCategory: {
      id: 4,
      name: "Mobile App Development",
      slug: "mobile-app-development",
    },
    speciality: {
      id: 5,
      name: "Flutter Developer",
      slug: "flutter-developer",
    },
    jobType: "RELOCATION",
    views: 0,
    shares: 0,
  };
};
