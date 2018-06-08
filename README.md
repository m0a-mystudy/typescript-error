
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

つくりました。 [typescript-fsa](https://github.com/aikoven/typescript-fsa)をヒントにしています。

```ts
	const someError = errorCreaterFactory<{num: number, str: string}>("someError")
	const someError2 = errorCreaterFactory<{hogenum: number, hogenum2: number}>("someError")

	try {
		throw someError.create({num: 12, str: "hogehoge"})
	} catch(e){
		if (isErrorType(e,someError)) {
			console.log(e); //   { type: 'someError', payload: { num: 12, str: 'hogehoge' } }
			console.log(e.payload.num) // 12
			console.log(e.payload.str) // hogehoge
		} 
		if (isErrorType(e, someError2)) {
			console.log(e);
			console.log(e.payload.hogenum2);
		}
	}
```