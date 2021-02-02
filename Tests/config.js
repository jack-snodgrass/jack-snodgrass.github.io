const port = process.env.CI === 'true' ? '9000' : '8000';
export const baseUrl = `https://jack-snodgrass.github.io/`;
export const debugFail = {
  debugOnFail: true
};