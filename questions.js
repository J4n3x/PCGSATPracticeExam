const questionBank=[]

function numberSeries(){
    let a=Math.floor(Math.random()*10)+1
    let d=Math.floor(Math.random()*5)+2
    let q=[a,a+d,a+2*d,a+3*d]
    return {
        q:`${q[0]}, ${q[1]}, ${q[2]}, ${q[3]}, ?`,
        choices:[q[3]+d-2, q[3]+d, q[3]+d+2, q[3]+d+4],
        answer:1,
        explanation:`Arithmetic sequence +${d}`
    }
}

function letterSeries(){
    let start=Math.floor(Math.random()*10)
    let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return {
        q:`${letters[start]}, ${letters[start+2]}, ${letters[start+4]}, ${letters[start+6]}, ?`,
        choices:[letters[start+7], letters[start+8], letters[start+9], letters[start+10]],
        answer:1,
        explanation:"Alphabet pattern +2"
    }
}

function algebra(){
    let x=Math.floor(Math.random()*10)+1
    let a=2, b=4, c=a*x+b
    return {
        q:`Solve for x: ${a}x + ${b} = ${c}`,
        choices:[x-1,x,x+1,x+2],
        answer:1,
        explanation:`${a}x=${c-b} therefore x=${x}`
    }
}

function ratio(){
    let a=Math.floor(Math.random()*5)+2
    let b=Math.floor(Math.random()*5)+2
    let total=a+b
    return {
        q:`Ratio of boys to girls is ${a}:${b}. If total is ${total*2}, how many boys?`,
        choices:[a*2-2,a*2,a*2+2,a*2+4],
        answer:1,
        explanation:`Multiply ratio by 2`
    }
}

function verbal(){
    return {
        q:"Which word does not belong?",
        choices:["Dog","Cat","Cow","Car"],
        answer:3,
        explanation:"Car is not an animal"
    }
}

for(let i=0;i<1100;i++){
    let generators=[numberSeries,letterSeries,algebra,ratio,verbal]
    let g=generators[Math.floor(Math.random()*generators.length)]
    questionBank.push(g())
}