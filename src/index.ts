function roundNumber(input: number, precision = 2): number {
  const factor = Math.pow(10, precision);
  return Math.round((input + Number.EPSILON) * factor) / factor;
}

function sleep(duration: number): Promise<void> {
  return new Promise((r) => setTimeout(r, duration));
}

function isBoolean(value: string): boolean {
  return value === 'false' || value === 'true';
}

function isNumber(value: number | string | boolean | undefined | null): boolean {
  return value != null && value !== '' && !isNaN(Number(value));
}

export { roundNumber, sleep, isBoolean, isNumber };
