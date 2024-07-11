"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    get id() {
        return this.props.id;
    }
    get name() {
        return this.props.name;
    }
    get email() {
        return this.props.email;
    }
    get images() {
        return this.props.images;
    }
    get globalScore() {
        return this.props.globalScore;
    }
    get weekScore() {
        return this.props.weekScore;
    }
    get createdAt() {
        return this.props.created_at;
    }
    get updatedAt() {
        return this.props.updated_at;
    }
    constructor(props) {
        this.props = props;
        this.props.created_at = new Date().toISOString();
        this.props.updated_at = new Date().toISOString();
    }
}
exports.User = User;
