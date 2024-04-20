interface MajorCredits {
  credits: number;
  brand: "Major";
}

interface MinorCredits {
  credits: number;
  brand: "Minor";
}

export function sumMajorCredits(subject1:MajorCredits, subject2:MajorCredits) {
  const MajorCredits = subject1.credits + subject2.credits;
  return MajorCredits;
}

export function sumMinorCredits(subject1:MinorCredits, subject2:MinorCredits) {
  const MinorCredits = subject1.credits + subject2.credits;
  return MinorCredits;
}
