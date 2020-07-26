function makeArr<T>(arg: T): T[] {
  return [arg];
};

console.log(makeArr<string>('abc'), makeArr<number>(123));

interface List<T> {
  data: T,
  desc: string,
}

type StringList = List<string>;

class Abc<T> {
  data: T;
}

let bar = new Abc<number>();

// -------

type state = 'on' | 'off';
let someStatus: state = 'on';

enum DaysOfWeek {
  Sun, // 0
  Mon, // 1
  Tue, // 2
  Wed, // 3
  Thu, // 4
  Fri, // 5
  Sat = 6
};

let today = DaysOfWeek.Thu;

enum CatNames {
  Masya, // 0
  Lucy = 5,
  Chloe, // 6
  Sophie = 10,
  // .... // 11, 12, ...
  Barsik = 'justCat',
  Murzik = 1, // Error
};

interface Cat {
  name: CatNames
}

const cat: Cat = {
  name: CatNames.Masya,
}

console.log(CatNames[0], CatNames.Lucy); // Masya, 5