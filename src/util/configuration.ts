import environmentVariables from "../../config/custom-environment-variables";
import development from "../../config/development";
import production from "../../config/production";
import defaultValues from "../../config/default";

const isEnvironmentVariable = (value: string) => {
  for (let prop in environmentVariables) {
    if (prop === value) return true;
  }

  return false;
};

const get = (value: string) => {
  const environment = process.env.NODE_ENV;
  const defaultValue = defaultValues[value];

  if (defaultValue) return defaultValue;

  if (environment === "development") {
    const result = development[value];

    if (!result) return;
    if (isEnvironmentVariable(result))
      return import.meta.env[environmentVariables[result]];

    return result;
  } else if (environment === "production") {
    const result = production[value];
    if (!result) return;
    if (isEnvironmentVariable(result))
      return import.meta.env[environmentVariables[result]];

    return result;
  }
};

export default get;
