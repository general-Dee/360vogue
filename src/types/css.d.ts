// Type declaration for CSS files
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// For global CSS imports without a module
declare module '*.css' {
  const content: void;
  export default content;
}
