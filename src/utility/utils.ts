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
