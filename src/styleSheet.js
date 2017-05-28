import { create } from 'jss';
import camelCase from 'jss-camel-case'
import vendorPrefixer from 'jss-vendor-prefixer'
import nested from 'jss-nested';
import defaultUnit from 'jss-default-unit'

const jss = create();

jss.use(nested());
jss.use(camelCase());
jss.use(vendorPrefixer());
jss.use(defaultUnit());

function Styles(classes) {
    Object.assign(this, classes);
}

Styles.prototype.getPreset = function (prefix: string, preset: string) {
    return this[`${prefix}${preset.charAt(0).toUpperCase()}${preset.substr(1)}`];
};

export const StyleSheet  = {
    create(styles: Object) {
        const sheet = jss.createStyleSheet(styles).attach();

        return new Styles(sheet.classes);
    }
};

export const getServerSideSheets = () => {
    return jss.sheets.toString();
};