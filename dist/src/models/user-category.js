"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCategory = void 0;
class UserCategory {
    constructor(props) {
        this.props = props;
        this.props.created_at = new Date().toISOString();
        this.props.updated_at = new Date().toISOString();
    }
}
exports.UserCategory = UserCategory;
