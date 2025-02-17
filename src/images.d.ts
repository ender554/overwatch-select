// src/images.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}

// If you're using require in a non-Node context, you can do:
declare const require: (module: string) => { default: string };
