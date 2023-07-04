declare const VERSION: string;
declare const SERVER_API_URL: string;
declare const DEVELOPMENT: string;
declare const I18N_HASH: string;

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@projectservice/entities-routes' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@projectservice/entities-menu' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@serviceoverviewservice/entities-routes' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@serviceoverviewservice/entities-menu' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@learnservice/entities-routes' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@learnservice/entities-menu' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@productservice/entities-routes' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@productservice/entities-menu' {
  const _default: () => JSX.Element;
  export default _default;
}
