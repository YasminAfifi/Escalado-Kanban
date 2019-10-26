import { User } from "../types/User";

export function formatDisplayName(user: User) {
    return `${user.firstName} ${user.lastName}`;
}
