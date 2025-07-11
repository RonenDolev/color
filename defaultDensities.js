// defaultDensities.js

const defaultDensities = {
  gloss: {
    C: { 20: 0.32, 40: 0.56, 60: 0.87, 80: 1.18, 100: 1.45 },
    M: { 20: 0.32, 40: 0.57, 60: 0.89, 80: 1.21, 100: 1.45 },
    Y: { 20: 0.28, 40: 0.48, 60: 0.75, 80: 1.02, 100: 1.00 },
    K: { 20: 0.40, 40: 0.76, 60: 1.12, 80: 1.50, 100: 1.75 }
  },
  semimatte: {
    C: { 20: 0.30, 40: 0.54, 60: 0.84, 80: 1.12, 100: 1.30 },
    M: { 20: 0.30, 40: 0.55, 60: 0.86, 80: 1.15, 100: 1.30 },
    Y: { 20: 0.26, 40: 0.44, 60: 0.69, 80: 0.93, 100: 0.95 },
    K: { 20: 0.37, 40: 0.70, 60: 1.07, 80: 1.40, 100: 1.55 }
  },
  matte: {
    C: { 20: 0.28, 40: 0.50, 60: 0.80, 80: 1.08, 100: 1.20 },
    M: { 20: 0.28, 40: 0.51, 60: 0.82, 80: 1.09, 100: 1.20 },
    Y: { 20: 0.23, 40: 0.38, 60: 0.60, 80: 0.81, 100: 0.90 },
    K: { 20: 0.33, 40: 0.62, 60: 0.92, 80: 1.24, 100: 1.35 }
  }
};

export default defaultDensities;