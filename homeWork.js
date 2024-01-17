            //Лекция 3 ДЗ//

            //Задание 1//

            const counter = new Object();
            const counter = Object.create(counter);
            function returnObj() {
                return {};
            }

            //Задание 2//
            const copyCounter = Object.assign({}, counter);
            const copyCounter = {};
            for (let key in counter) {
                copyCounter[key] = counter[key];
            }
            const copyCounter = structuredClone(counter);
            const copyCounter = JSON.parse(JSON.stringify(counter));
            _.cloneDeep(counter) из библиотеки JavaScript lodash.

            //Задание 3//
            function makeCounter(){}
            const makeCounter = () => {};
            const makeCounter = function(){}
            const myFunction = function makeCounter(){}

            //Бонус Задание 1//
            const obj1 = { here: { is: 'on', other: '3' }, object: {} };
            const obj2 = { here: { is: 'on', other: '2' }, object: {} };
            const deepEqual = (obj1, obj2) => {
                if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                    return false;
                }
                for (let key in obj1) {
                    let values1 = Object.values(obj1[key]);
                    let values2 = Object.values(obj2[key]);
                    if (values1.length !== values2.length) {
                        return false;
                    }
                    if (values1[0] !== values2[0]) {
                        return false;
                    }
                    if (values1[1] !== values2[1]) {
                        return false;
                    }
                }
                return true;
            };
            
            //Бонус Задание 2//
            function reverseStr(str) {
                return Array.from(str).reverse().join('');
            }

            //Лекция 4 ДЗ//
            //Задание 1//

            Основная причина этого заключается в том, что массивы в JavaScript являются динамическими и могут содержать элементы разных типов данных.
            Массивы могут содержать stack,queue, ассоциативные массивы или хеш-таблицы
            
            //Задание 2//

            function logger() {
                console.log(`I output only external context: ${this.item}`);
            }
            const obj = { item: 'some value' };
            logger.call(obj);
            logger.apply(obj);
            const bindLogger = logger.bind(obj);
            bindLogger();

            //Бонус задание//

            if (!Function.prototype.bind) {
                Function.prototype.bind = function (context, ...args) {
                  if (typeof this !== 'function') {
                    throw new TypeError('Function.prototype.bind - что-то пошло не так');
                  }
                  let fn = this;
                  return function (...boundArgs) {
                    return fn.apply(context, args.concat(boundArgs));
                  };
                };
              }

              //Лекция 5 ДЗ//
              //Задание 1//
            Сортировка пузырьком
            Сортировка выбором
            Сортировка вставками
            Сортировка слиянием
            Быстрая сортировка
            Блочная сортировка

                //Задание 3//
                const person = {
                    age: 33,
                    name: 'Oleg',
                };
                const person2 = (new Object().__proto__ = person);
                person.logInfo = function () {};
                //Задание 4//               
                class Person {
                    constructor(name) {
                      this.name = name;
                    }
                  }       
                  class PersonThree extends Person {
                    constructor(name, age) {
                      super(name);
                      this.age = age;
                    }                 
                    get name() {
                      return this._name;
                    }     
                    set name(value) {
                      this._name = value;
                    }
                  }
                  //Бонус//
                  //1//
                arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                total = 13;
                const firstSum = (arr, total) => {
                let left = 0;
                let right = arr.length - 1;

                while (left < right) {
                    const sum = arr[left] + arr[right];
                    if (sum === total) {
                        return [arr[left], arr[right]];
                    } else if (sum < total) {
                        left++;
                    } else {
                        right--;
                    }
                }
            };
            firstSum(arr, total);
            //2//
            Сложность - O(n)

            //Лекция 6 ДЗ//
            1. 1 3 6 4 5 2
            2. 1 3 2
            3. abc
            4. 1 123,2 123,3 321,4 undefined
            5. 1 4 3 2
            
            //Задание 6//
             let arr = [10, 12, 15, 21];
            arr.forEach((num, index) => {
                setTimeout(() => {
                    console.log(index);
                }, index * 3000);
            });
           
           
            
