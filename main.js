'use strict'

const str = `
010-1234-5678
sdthe@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi');
// console.log(regexp.test(str));
// str변수에서 fox를 찾아서 AAA로 변환하고 재할당
// str = str.replace(/fox/gi, 'AAA')
// console.log(str);

// .. = 문자 하나를 의미 h로시작해서p로끝나는 4글자 문자 찾기
console.log(
  str.match(/h..p/g)
  );
  // str 안에 fox or dog가 있는지
console.log(
  str.match(/fox|dog/g)
  );
// str 안에 https나 http가 있는지 ?앞 문자 하나가 있는지 없는지 판별 
console.log(
  str.match(/https?/g)
  );

console.log(str.match(/\b\w{2,3}\b/g));

// 한개 이상의 연속된 숫자
console.log(
  str.match(/[0-9]{1,}/g)
);

// 한개 이상의 연속된 한글
console.log(
  str.match(/[가-힣]{1,}/g)
);
console.log(
  str.match(/\w/g)
);
// f로시작하는 63개 문자 중 1글자이상 추출 63개문자에 일치하지 않는 문자는 경계
console.log(
  str.match(/\bf\w{1,}\b/g)
);
// 숫자만 추출
console.log(
  str.match(/\d/g)
);
// 한개이상 연속된 숫자들 추출
console.log(
  str.match(/\d{1,}/g)
)
// 공백 문자 추출
console.log(
  str.match(/\s/g)
);

const h = ` the hello world  ! 

`
// h 변수의 값에서 공백을 제거
console.log(
  h.replace(/\s/g, '')
)
// @ 앞의 1개 이상의 문자 추출
console.log(
  str.match(/.{1,}(?=@)/g)
)
// @ 뒤의 1개 이상의 문자 추출
console.log(
  str.match(/(?<=@).{1,}/g)
)