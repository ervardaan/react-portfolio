import '@testing-library/jest-dom';

vi.mock('whatwg-url', () => {
  return {
    URL: class {
      constructor(url) {
        this.href = url;
      }
    }
  };
});
