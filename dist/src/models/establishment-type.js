"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishmentType = void 0;
class EstablishmentType {
    get id() {
        return this.props.id;
    }
    get name() {
        return this.props.name;
    }
    constructor(props) {
        this.props = props;
        this.props.createdAt = new Date().toISOString();
        this.props.updatedAt = new Date().toISOString();
    }
}
exports.EstablishmentType = EstablishmentType;
