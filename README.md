
```ts
interface SomeError {
    type: "someRrror"
    data: string
}

interface SomeError2 {
    type: "someError2"
    data: number
}

interface SomeError3 {
    type: "SomeError3"
    data: Element
}

type AllError = SomeError | SomeError2 | SomeError3 



let main = () => {
    try {

        // ptn1
        throw {
            type: "someRrror",
            data: "hogehogehoge"
        } as SomeError;

        
    } catch (e) {
        const err = e as AllError;
        if (err.type && err.type === "someError2") {
            console.log(err.data)
        } else if ()
    }

}
main();

```

つらい
