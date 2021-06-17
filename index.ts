//https://nehalist.io/dependency-injection-in-typescript/
import 'reflect-metadata';

const deco = (): ClassDecorator => {
  return target => {
    console.log(Reflect.getMetadata('design:paramtypes', target));
  };
};

class Primi {
  constructor(private nombre) {}
}

@deco()
class Decorada {
  constructor(private param: number, primi: Primi) {}
}

new Decorada(1, new Primi(1));
