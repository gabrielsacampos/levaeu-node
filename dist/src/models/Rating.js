"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
class Rating {
    constructor(props) {
        this.props = props;
        this.props.created_at = new Date().toISOString();
        this.props.updated_at = new Date().toISOString();
    }
}
exports.Rating = Rating;
