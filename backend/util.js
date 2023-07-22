import { countries } from "country-data"

// Function to get the STD code based on country name or two-letter country
export function getStdCodeByCountryCode(countryCode) {
    const country = countries.all.find(c => c.alpha2 === countryCode.toUpperCase());

    return country ? country.countryCallingCodes[0] : "-1";
}
