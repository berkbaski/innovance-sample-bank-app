export type User = {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
};

export type RegisterPayload = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
