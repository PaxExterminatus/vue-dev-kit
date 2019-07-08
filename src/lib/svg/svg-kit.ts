// @ts-ignore
import {conf} from './svg.config.js'

export class Svg {
    css: string;
    box: string;
    html: string;
    constructor({css, size, path} : {css: string, size: number, path: string})
    {
        this.css = `${conf.cssClass} ${css}`;
        this.box = `0 0 ${size} ${size}`;
        this.html = new Path({css: `${conf.cssClassVector} ${css}`, d: path}).toString();
    }
}

export class SvgComples {
    constructor({} : {}) {

    }
}

class Path {
    path : string;
    constructor({css, d} : {css: string, d: string})
    {
        this.path = `<path class="${css}" d="${d}"></>`;
    }

    toString() : string {
        return this.path;
    }
}