declare const joinQueries: <S extends string>(string: S) => <Q extends string>(queryString: Q) => S extends `${string}?${string}` ? `${S}&${Q}` : `${S}?${Q}`;
export default joinQueries;
