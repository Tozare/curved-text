export type Keys<T> = keyof T;
export type Values<T> = T[Keys<T>];
