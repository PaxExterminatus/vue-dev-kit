// @ts-ignore
import {conf} from 'lib/svg.config'
import {SvgInterface} from './SvgInterface'

export class Svg implements SvgInterface {
    css: string;
    size: number;
    html: string;
    constructor({css, size, html} : SvgInterface)
    {
        this.size = size;
        this.css = css;
        this.html = `<path class="${conf.cssClassVector} ${css}" d="${html}"/>`;
    }

    get box() {
        return `0 0 ${this.size} ${this.size}`;
    }
}