
export class Svg {
    box: string;
    html: string;
    constructor({box, paths} : {box: string, paths: Array<Path>})
    {
        this.box = box;
        this.html = paths[0].toString(); //todo use array paths list
    }
}

export class Path {
    path : string;
    constructor({d, css} : {d: string, css: Array<string>})
    {
        this.path = `<path class="${css.join(' ')}" d="${d}"></>`;
    }

    toString() : string {
        return this.path;
    }
}