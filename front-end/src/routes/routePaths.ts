export enum Path {
  HOME = '/',
}

export type RoutesType = typeof Path[keyof typeof Path];
