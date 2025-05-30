interface MajorCredits {
  credits: number;
  readonly _majorBrand: unique symbol;
}

interface MinorCredits {
  credits: number;
  readonly _minorBrand: unique symbol;
}

/**
 * Sums the credits of two major credit subjects
 * @param subject1 First major credit subject
 * @param subject2 Second major credit subject
 * @returns A MajorCredits object with the sum of credits
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

/**
 * Sums the credits of two minor credit subjects
 * @param subject1 First minor credit subject
 * @param subject2 Second minor credit subject
 * @returns A MinorCredits object with the sum of credits
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}

const major1 = { credits: 3 } as MajorCredits;
const major2 = { credits: 4 } as MajorCredits;
const minor1 = { credits: 1 } as MinorCredits;
const minor2 = { credits: 2 } as MinorCredits;

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
