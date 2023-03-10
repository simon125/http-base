/**
 * Jako zadanie rozgrzewkowe przemapuj się/przeiteruj się po tablicy z użytkownikami.
 * Pojedynczego użytkownika reprezentuje obiekt tzn. użytkownik jest obiektem np.
 *
 * const user = { name: 'Jack', age: 22, gender: 'M'};
 *
 * Twoim zadaniem jest dodanie nowego pola (zmiennej w obiekcie) które będzie nam mówiło czy użytkownik jest pełnoletni
 * możemy użyć słowa isAdult - niech pole będzie typu boolean czyli albo true albo false
 *
 * zachęcam do użycia funkcji wyższego rzędu
 *
 * wiek jaki przyjmiemy za dorosły to 18
 */

const users = [
  { id: "e12waeq", name: "Carl", age: 12 },
  { id: "12edasd", name: "Jack", age: 52 },
  { id: "agrg34g", name: "Jane", age: 3 },
  { id: "f4fsfev", name: "John", age: 18 },
  { id: "r344rfw", name: "Jarvis", age: 14 },
  { id: "gewrrr2", name: "Jerry", age: 24 },
];

/**
 * poniżej znajduje się oczekiwana tablica userów
 */

const expectedUsers = [
  { id: "e12waeq", name: "Carl", age: 12, isAdult: false },
  { id: "12edasd", name: "Jack", age: 52, isAdult: true },
  { id: "agrg34g", name: "Jane", age: 3, isAdult: false },
  { id: "f4fsfev", name: "John", age: 18, isAdult: true },
  { id: "r344rfw", name: "Jarvis", age: 14, isAdult: false },
  { id: "gewrrr2", name: "Jerry", age: 24, isAdult: true },
];
