/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import ENV from 'ember-practice/config/environment';

const MAPBOX_API = "https://api.mapbox.com/styles/v1/mapbox/dark-v10/static";

export default class MapComponent extends Component {

    get src()
    {
        let { lng, lat, width, height, zoom } = this.args;
        let coordinates = `${lat},${lng},${zoom}`;
        let dimensions = `${width}x${height}`;
        let accessToken = `access_token=${this.token}`;
        return `${MAPBOX_API}/${coordinates},0/${dimensions}?${accessToken}`;
    }

    get token() {
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}