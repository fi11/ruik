import { create } from 'jss';
import camelCase from 'jss-camel-case'
import defaultUnit from 'jss-default-unit'
import nested from 'jss-nested';
import vendorPrefixer from 'jss-vendor-prefixer'

const jss = create();

jss.use(camelCase());
jss.use(defaultUnit());
jss.use(nested());
jss.use(vendorPrefixer());

function Styles(classes) {
    Object.assign(this, classes);
}

Styles.prototype.getPreset = function (prefix: string, preset: string) {
    return this[`${prefix}${preset.charAt(0).toUpperCase()}${preset.substr(1)}`];
};

export default class StyleSheet {
    static create(styles: Object) {
        const sheet = jss.createStyleSheet(styles).attach();

        return new Styles(sheet.classes);
    }

    static getServerSideStyleSheets() {
      return jss.sheets.toString();
    }
};