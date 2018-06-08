
export interface AnyError {
	type: string
}

export interface Error<Payload> {
	type: string,
	payload: Payload
}


export type ErrorCreaterFactory<Payload>  = { 
	type:string
	create(payload: Payload): Error<Payload>
}


export const errorCreaterFactory = <Payload>(type: string): ErrorCreaterFactory<Payload> => {
	return {
		type,
		create (payload: Payload):Error<Payload> {
		return {
			type,
			payload
		}
	}}
}

export function isErrorType<Payload>(
	err: AnyError,
	errorCreaterFactory: ErrorCreaterFactory<Payload>,
  ): err is Error<Payload> {
	return err.type === errorCreaterFactory.type;
  }
  


test('errorCreater test', ()=>{
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

	// expect(someError.create({num: 12, str: "message"})).toContain('<1>');
	// expect(someError2.create({hogenum: 1, hogenum2: 2})).toContain('<1>');
});


