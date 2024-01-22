//[부서정보]
//[부서번호,부서명,지역]
let dData = [
  { no: "10", dname: "ACCOUNTING", location: "NEW YORK" },
  { no: "20", dname: "RESEARCH", location: "DALLAS" },
  { no: "30", dname: "SALES", location: "CHICAGO" },
  { no: "40", dname: "OPERATIONS", location: "BOSTON" }
];
// [사원정보]
// [번호,이름,직책,상사번호,입사일,급여,커미션,부서번호]
let eData = [
  { id: "7369", ename: "SMITH", title: "CLERK", sid: "7902", birth: "17-12-1980", salary: "800", commission: "0", dno: "20" },
  { id: "7499", ename: "ALLEN", title: "SALESMAN", sid: "7698", birth: "20-2-1981", salary: "1600", commission: "300", dno: "30" },
  { id: "7521", ename: "WARD", title: "SALESMAN", sid: "7698", birth: "22-2-1981", salary: "1250", commission: "500", dno: "30" },
  { id: "7566", ename: "JONES", title: "MANAGER", sid: "7839", birth: "2-4-1981", salary: "2975", commission: "0", dno: "20" },
  { id: "7654", ename: "MARTIN", title: "SALESMAN", sid: "7698", birth: "28-9-1981", salary: "1250", commission: "1400", dno: "30" },
  { id: "7698", ename: "BLAKE", title: "MANAGER", sid: "7839", birth: "1-5-1981", salary: "2850", commission: "0", dno: "30" },
  { id: "7782", ename: "CLARK", title: "MANAGER", sid: "7839", birth: "9-6-1981", salary: "2450", commission: "0", dno: "10" },
  { id: "7788", ename: "SCOTT", title: "ANALYST", sid: "7566", birth: "13-7-1987", salary: "3000", commission: "0", dno: "20" },
  { id: "7839", ename: "KING", title: "PRESIDENT", sid: "NULL", birth: "17-11-1981", salary: "5000", commission: "0", dno: "10" },
  { id: "7844", ename: "TURNER", title: "SALESMAN", sid: "7698", birth: "8-9-1981", salary: "1500", commission: "0", dno: "30" },
  { id: "7876", ename: "ADAMS", title: "CLERK", sid: "7788", birth: "13-7-1987", salary: "1100", commission: "0", dno: "20" },
  { id: "7900", ename: "JAMES", title: "CLERK", sid: "7698", birth: "3-12-1981", salary: "950", commission: "0", dno: "30" },
  { id: "7902", ename: "FORD", title: "ANALYST", sid: "7566", birth: "3-12-1981", salary: "3000", commission: "0", dno: "20" },
  { id: "7934", ename: "MILLER", title: "CLERK", sid: "7782", birth: "23-1-1982", salary: "1300", commission: "0", dno: "10" }
];

// [월급 등급]
// [등급 , 급여MIN , 급여MAX]
let salGrade = [
  { grade: 1, min: 700, max: 1200 }, // 1등급이고 급여 700~1200 사이
  { grade: 2, min: 1201, max: 1400 },
  { grade: 3, min: 1401, max: 2000 },
  { grade: 4, min: 2001, max: 3000 },
  { grade: 5, min: 3001, max: 9999 }
];


// 1. 부서별 평균월급여 
dData.forEach((d)=>{
  let cnt = 0;
  let sum = 0;
  sum = eData.reduce((sum,e)=>{
    if(e.dno ==d.no){
      cnt+=1;
      return sum += +e.salary;
    }else{
      return sum;
    }
  },0);
  // console.log(`d.no=${d.no}`)
  // console.log(`cnt=${cnt}`)
  let avg = sum / cnt;
  console.log(`${d.dname}부서의 평균 월급은 ${avg} `)
});


console.log(`=============================================================================================`)
// 2.부서별 전체 사원수와 커미션을 받는 사원들의 수
dData.forEach((d)=>{
  let arr = eData.filter((e)=> e.dno==d.no);
  let comArr = arr.filter((c) => c.commission!=0);
  let comCnt = comArr.length;
  
  console.log(`${d.dname}부서의 전체 사원수 = ${arr.length}이고 커미션을 받는 사원들의 수 =  ${comCnt} `)
});


console.log(`=============================================================================================`)
// 3.부서별 최대 급여와 최소 급여
console.log(`부서 최대최소급여`);
console.log(`           max    min`);
let idx = 0;
dData.forEach((d)=>{
  let salArr = [];
  for(let key in eData){
    if(eData[key].dno == d.no){
      salArr.push(eData[key].salary)
    }
  }
  if(salArr[idx++] != null){
    console.log(`${d.dname} = ${Math.max.apply(null,salArr)} :  ${Math.min.apply(null,salArr)} `)
  }else{
    console.log(`${d.dname} = NoData :  NoData `)
  }

});

console.log(`=============================================================================================`)
// 4.부서번호가 30번인 사원들의 이름, 직급, 부서번호, 부서위치를 조회하시오.
let data = dData.find((d)=>d.no==30).location;
let tempArr =eData.filter((e)=>e.dno==30);
tempArr.forEach((e)=>{
  console.log(`이름 =${e.ename} ,직급 ${e.title}, 부서번호 ${e.dno}, 부서위치 ${data}`)
})
console.log(`=============================================================================================`)
// 5.커미션을 받는 사원의 이름, 커미션, 부서이름,부서위치를 조회하시오.
tempArr = eData.filter(e=> e.commission !=0);
tempArr.forEach(e => {
  let nameData;
  let locData;
  dData.forEach(d => {
    if(d.no == e.dno){
      nameData = d.dname;
      locData = d.location;
    }else{
      return;
    }
  });
  console.log(`이름:${e.ename} , 커미션:${e.commission}, 부서이름:${nameData}, 부서위치:${locData}`)
});

console.log(`=============================================================================================`)
// 6.급여가 높은 순으로 조회하되 급여가 같을 경우 이름의 철자가 빠른 사원순으로 사번,이름,월급여를 조회하시오.
tempArr = [...eData];
tempArr.sort((obj1,obj2)=>{
  if(obj1.commission != obj2.commission){
    return obj2.commission - obj1.commission;
  }else if (obj1.commission == obj2.commission){
    // return console.log(obj2.ename.charAt(1));
    // return obj2.ename.charAt(1) - obj1.ename.charAt(1);
  }
});
tempArr.forEach((e)=>{
  console.log(`사번 ${e.id} : , 이름 ${e.ename}:, 급여 ${e.commission}`)
});

console.log(`=============================================================================================`)
// 7.DALLAS에서 근무하는 사원의 이름,직급,부서번호,부서명을 조회하시오.
data = "DALLAS"
tempArr = eData.filter(e =>e.dno == (dData.find(d => d.location == data).no));
tempArr.forEach(d=>{
  console.log(`이름 ${d.ename},직급 ${d.title},부서번호 ${d.dno},부서명 ${data}`);
})


console.log(`=============================================================================================`)

// 8.이름에 A 가 들어가는 사원의 이름,부서명을 조회하시오.

// 9.ALLEN과 같은 부서에 근무하는 사원의 이름, 부서번호를 조회하시오.
let num=0;
tempArr.sort((o1,o2)=>{
  if(o2.salary != o1.salary){
    return o2.salary - o1.salary;
  }else{
    if(o2.ename < o1.ename){
      return 1;
    }else{
      return -1;
    }
  }
});

tempArr.forEach(e => {console.log(`사번${e.id} : , 이름${e.ename}:, 월급여${e.salary}`)
});
console.log(`=============================================================================================`)
// 7.DALLAS에서 근무하는 사원의 이름,직급,부서번호,부서명을 조회하시오.
data = "DALLAS";
dData.forEach(d=>{
  if(d.location==data){
    eData.filter(e=>e.dno==d.no).forEach(e=>{
      console.log(`이름= ${e.ename} , 직급= ${e.title}, 부서번호= ${e.dno}, 부서명= ${d.dname}`)
    })
  }
})

console.log(`=============================================================================================`)
// 8.이름에 A 가 들어가는 사원의 이름,부서명을 조회하시오.
eData.filter(e=>{
  for(let value of e.ename){
    data = "A";
    if(value==data){
      data = dData.find(d=>d.no==e.dno).dname;
      console.log(`이름= ${e.ename} ,부서명= ${data}`)
      return;
    }
  }
})
console.log(`=============================================================================================`)
// 9.ALLEN과 같은 부서에 근무하는 사원의 이름, 부서번호를 조회하시오.
data = "ALLEN";
eData.filter(e=>e.dno == eData.find(name => name.ename == data).dno).forEach(e=>{
  if(e.ename==data)return;
  console.log(`이름= ${e.ename}, 부서번호= ${e.dno} `);
});


console.log(`=============================================================================================`)
// 10.사원명 'JONES'가 속한 부서명을 조회하시오.
data = "JONES"
console.log(`${data}가 속한 부서명= `+ dData.find(d=>d.no == eData.find(e=>e.ename == data).dno).dname );




console.log(`=============================================================================================`)

// 11.10번 부서에서 근무하는 사원의 이름과 10번 부서의 부서명을 조회하시오.
data = "10";
eData.filter(e=>e.dno==data).forEach(e=>{
  console.log(`사원의 이름 = ${e.ename}, 부서명 = ${dData.find(d=>d.no==10).dname}`);
})


console.log(`=============================================================================================`)
// 12.평균 월급여보다 더 많은 월급여를 받은 사원의 사원번호,이름,월급여 조회하시오.
let avg = parseInt(eData.reduce((sum,sal)=>sum += parseInt(sal.salary),0)/eData.length);
console.log("평균 급여 이상 수령하는 사원목록");
eData.filter(e=>e.salary>avg).forEach(e=>{
  console.log(`사원의 번호 = ${e.id}, 이름 = ${e.ename}, 급여 = ${e.salary}`);
  
})


console.log(`=============================================================================================`)
// 13.부서번호가 20인 사원중에서 최대급여를 받는 사원과 동일한 급여를 받는 사원의 사원번호, 이름을 조회하시오.
data = 20;
eData.filter(e=>
  e.salary == eData.filter(e=>e.dno==data).reduce((max,e)=>{
    let sal = parseInt(e.salary);
    if(sal > max){
      max = sal;
      return max;
    }
    return max;
  },0)).forEach(e=>{
    console.log(`사원번호 = ${e.id} , 이름 = ${e.ename} , 급여 = ${e.salary}`);
  });
console.log(`=============================================================================================`)
  // 14.사원 테이블에서 사원명과 해당 사원의 관리자명을 검색하시오
  eData.forEach(e=>{
    const name = e.ename;
    const sname = eData.find(s=>s.id==e.sid)? eData.find(s=>s.id==e.sid).ename:"없음";
    console.log(`사원의 이름 = ${name}, 관리자명 = ${sname}`)
  })
  
  
console.log(`=============================================================================================`)
  // 15.20번 부서의 이름과 그 부서에 근무하는 사원의 이름을 출력하시오.
  data = 20;
  eData.filter(e=>e.dno==data).forEach(e=>{
    let dname = dData.find(d=>d.no==e.dno).dname;
    console.log(`부서이름 ${dname}, 부서에서 근무하는 사원 이름 : ${e.ename}`);
  });

console.log(`=============================================================================================`)

  // 16.사원 테이블에서 부서별 최대 급여를 받는 사원들의 사번, 이름, 부서코드, 급여를 검색하시오.
  dData.forEach(d=>{
    const dNo= d.no;
    const dList = eData.filter(e=>e.dno==dNo);
    // 부서별로 필터 후 최대급여로 다시 필터
    dList.filter(e=>{
      // 최대 급여 구하기.
      const max = dList.reduce((max,member)=>{
        let sal = parseInt(member.salary);
        if(sal > max){
          max = sal;
          return max;
        }
        return max;
      },0);
      // 최대급여구하기 끝
      
      // 최대급여와 같은 사원 필터
      if(e.salary == max){
        return e;
      };
      // 최대급여사원들의 배열
    }).forEach(e=>{
      console.log(`부서명 = ${d.dname} , 사번 : ${e.id} , 이름 : ${e.ename} , 부서코드 : ${e.dno}  `)
    });
  });
  
console.log(`=============================================================================================`)
  // 17.Salgrade가 2등급인 사원들의 평균 급여보다 적게 받는 사원 정보를 검색하시오.
  let salGradeList = [];
  salGrade.forEach(grade=>{
    const list = eData.filter(e=>{
      if(e.salary >= grade.min && e.salary <= grade.max)return e;
    });
    salGradeList.push(list);
  });
  avg = parseInt(salGradeList[1].reduce((sum,sal)=>sum+= parseInt(sal.salary),0) / salGradeList[1].length);
  eData.filter(e=>e.salary<avg).forEach(e=>{
    console.log(e.ename);
  })
console.log(`=============================================================================================`)
  let cnt =0;
  avg = parseInt(eData.filter(e=>{
  const grade2Level = salGrade[1];
  if(e.salary >= grade2Level.min && e.salary <= grade2Level.max){
    cnt++;
    return e;
  }
}).reduce((sum,sal)=>sum+=parseInt(sal.salary),0)/cnt);
eData.filter(e=>e.salary<avg).forEach(e=>{
  console.log(e.ename);
});
