/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class RentalImageComponent extends Component {
    // Its just like the .obs ib GetX in flutter ...chill baby
    @tracked isLarge = false;

    // and its like a .obs for methods. Probably mber.js specific things you know ;) .....
    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}