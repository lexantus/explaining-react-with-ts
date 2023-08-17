type Brand <T, B> = T & { __brand: B };

type Password = Brand<string, 'Password123'>;
const takesInPassword = (password: Password) => {};
takesInPassword('h3ll');
takesInPassword('h3ll' as Password);
takesInPassword(8);
takesInPassword(8 as Password);
takesInPassword(8 as unknown as Password);

// ---------------------------------------------

interface Post {
  id: number;
  title: string;
}

type PositiveNumber = number & { __type: 'PositiveNumber' };

export function getPosts(page: PositiveNumber): Post[] {
  console.log(page);
  return [];
}

const posts = getPosts(-1 as PositiveNumber); // need to use assert pattern!!!
console.log(posts);

// ---------------------------------------------
type USD = Brand<number, 'USD'>;
type EUR = Brand<number, 'EUR'>;

const usd = 10 as USD;
const eur = 10 as EUR;

function euroToUSD(euro: EUR): USD {
  return euro * 1.2 as USD;
}

euroToUSD(usd);
euroToUSD(eur);

// ---------------------------------------------
type ClearTimeout = Brand<number, 'ClearTimeout'>;
type ClearInterval = Brand<number, 'ClearInterval'>;

declare function setTimeout(handler: () => void, timeout: number): ClearTimeout;
declare function setInterval(hnadler: () => void, timeout: number): ClearInterval;
declare function clearTimeout(timeoutId: ClearTimeout): void;
declare function clearInterval(intervalId: ClearInterval): void;

const scheduled = setTimeout(() => {}, 1000);
clearInterval(scheduled);
clearTimeout(scheduled);

// ---------------------------------------------


