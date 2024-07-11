"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Establishment = void 0;
class Establishment {
    get id() {
        return this.props.id;
    }
    get type() {
        return this.props.type;
    }
    get name() {
        return this.props.name;
    }
    get address() {
        return this.props.address;
    }
    get description() {
        return this.props.description;
    }
    constructor(props) {
        this.props = props;
        this.props.createdAt = new Date().toISOString();
        this.props.updatedAt = new Date().toISOString();
    }
}
exports.Establishment = Establishment;
