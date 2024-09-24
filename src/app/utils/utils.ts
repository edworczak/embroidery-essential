import fs from "node:fs";

export const getRandomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
};

export const getRandomRotation = (
    negativeValue = 12,
    positiveValue = negativeValue
) => {
    const value = !getRandomNumber(1)
        ? `${getRandomNumber(positiveValue)}deg`
        : `-${getRandomNumber(negativeValue)}deg`;
    return `rotate(${value})`;
};

export const rotateElement = (
    negativeValue = 12,
    positiveValue = negativeValue
) => {
    return {
        transform: getRandomRotation(negativeValue, positiveValue),
    };
};

export const saveFile = (filename, data) => {
    fs.writeFileSync(`../data/${filename}.json`, JSON.stringify(data));
};

export const getDataFromJson = (fileName) => {
    const file = fs.readFileSync(`../data/${fileName}.json`, {
        encoding: "utf8",
    });
    return JSON.parse(file);
};

export const getProjects = () => {
    const projects = getDataFromJson("user-projects");
    console.log(projects);
    return projects;
};

export const getFormattedDate = (systemDate) => {
    const date = new Date(systemDate);
    let dd: string | number = date.getDate();
    let mm: string | number = date.getMonth() + 1;
    const rrrr = date.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return `${dd}.${mm}.${rrrr}`;
};
