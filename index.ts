// RxJS v6+
import { interval } from "rxjs";
import { takeLast, takeWhile } from "rxjs/operators";

/*
 Filtering Operator: takeLast
 ----------------------------

 Remembers the latest **count** values, then emits those only when the source completes.
 ```
 takeLast(count: number): Observable
 ```

 http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-takeLast
*/

// Emit: 0, 1, 2, ..., 20 (every 0.20s)
const source = interval(200).pipe(takeWhile(n => n <= 20));

// Take the last 3 emitted values
const example = source.pipe(takeLast(3));

// Receive: 20, 19, 18
console.log("[start]");
example.subscribe({
  complete: () => console.log("[complete]"),
  error: err => console.error("[error] : ", err),
  next: value => console.log("[next] : ", value)
});
