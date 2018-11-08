export default function last(source) {
  return (start, sink) => {
    if (start !== 0) return

    let gotValue = false
    let disposed = false
    let talkback
    let value

    source(0, (type, data) => {
      if (type === 0) {
        talkback = data
        sink(0, (type, data) => {
          if (type === 2) {
            disposed = true
          }
          talkback(type, data)
        })
        return
      }

      if (type === 1) {
        gotValue = true
        value = data
        talkback(1)
        return
      }

      if (type === 2 && !data && gotValue) {
        sink(1, value)

        if (disposed) {
          return
        }
      }

      sink(type, data)
    })
  }
}
