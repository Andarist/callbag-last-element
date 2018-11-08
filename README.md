# callbag-last-element

Callbag operator that emits only the last item emitted by the source.

## Example

```js
import forEach from 'callbag-for-each'
import interval from 'callbag-interval'
import last from 'callbag-last-element'
import pipe from 'callbag-pipe'
import take from 'callbag-take'

pipe(
  interval(100),
  take(5),
  last,
  forEach(v => {
    console.log(v) // will log 4
  })
)
```
