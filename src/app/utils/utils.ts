import fs from "node:fs";

export const rotateElement = (max = 13) => {
    const direction = Math.floor(Math.random() * 2) ? "" : "-";
    const value = Math.floor(Math.random() * max);
    return {
        transform: `rotate(${direction}${value}deg)`,
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
