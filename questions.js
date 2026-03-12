const questionBank=[]

// GENERAL KNOWLEDGE - PCG RELATED

questionBank.push(
    {
    type: "image",
    q: "Which figure completes the series?",
    image: "images/abstract_q1.png",
    choices: [
    "A",
    "B",
    "C",
    "D"
    ],
    answer: 3,
    explanation: "It continues the clockwise movement of the black region around the square and maintains the same diagonal boundary, while the black area keeps expanding in the same pattern."
    },

    {
    type: "image",
    q: "Which figure completes the series?",
    image: "images/abstract_q2.png",
    choices: [
    "A",
    "B",
    "C",
    "D"
    ],
    answer: 1,
    explanation: "It continues the sequence by placing the next square one step clockwise around the border, which is the middle-left cell, while preserving the color pattern established in the earlier frames."
    },

    {
        type: "image",
        q: "Which figure completes the series?",
        image: "images/abstract_q3.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 2,
        explanation: "Because it is the only option that satisfies both patterns: \n\r\n *diamond continues its clockwise corner cycle \n\r *line continues its 45° rotation and position shift."
    },

    {
        type: "image",
        q: "Which figure completes the series?",
        image: "images/abstract_q4.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 2,
        explanation: "The sequence shows the black region rotating clockwise through the four sides of the square. After the previous positions, the next logical step places the black area across the top half, which is exactly what Option C shows."
    },

    {
        type: "image",
        q: "Which figure completes the series?",
        image: "images/abstract_q5.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 0,
        explanation: "Because it is the only option where all the special symbols continue their one-step clockwise movement around the grid while the center square remains black."
    },

    {
        type: "image",
        q: "Which figure completes the statement?",
        image: "images/abstract_q6.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 1,
        explanation: "Because it applies the same diagonal relocation of shapes seen in the top pair while keeping the cross structure unchanged."
    },

    {
        type: "image",
        q: "Which figure completes the statement?",
        image: "images/abstract_q7.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 3,
        explanation: "Because it correctly applies the 90° clockwise transformation [horizontal bars become vertical] [corner symbols shift accordingly] [resulting layout exactly matches option D.]"
    },

    {
        type: "image",
        q: "Which figure completes the statement?",
        image: "images/abstract_q8.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 1,
        explanation: "Because option B is the exact vertical mirror (top ↔ bottom) of the bottom-left grid, which is the same transformation used in the top pair."
    },

    {
        type: "image",
        q: "Which figure completes the statement?",
        image: "images/abstract_q9.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 2,
        explanation: "Because option C correctly performs both transformations seen in the first pair: the two corner squares swap positions along the diagonal and the central line structure rotates 90° to match the new orientation."
    },

    {
        type: "image",
        q: "Which figure completes the statement?",
        image: "images/abstract_q10.png",
        choices: [
        "A",
        "B",
        "C",
        "D"
        ],
        answer: 3,
        explanation: "Because it correctly applies the transformation: [center circle → square] [outer squares move inward] [their filled/empty pattern is preserved, forming the diagonal pattern seen in option D.]"
    },

    //General Knowledge
    {
    q: "The Philippine Coast Guard is attached to which department?",
    choices: [
    "Department of National Defense",
    "Department of Transportation",
    "Department of Interior and Local Government",
    "Department of Environment and Natural Resources"
    ],
    answer: 1,
    explanation: "The Philippine Coast Guard (PCG) is an attached agency of the Department of Transportation (DOTr) responsible for maritime safety, security, and environmental protection. \n\n Originally, the Philippine Coast Guard was under the Philippine Navy and supervised by the Department of National Defense (DND). However, through the Philippine Coast Guard Law of 2009 (Republic Act No. 9993), the PCG was formally placed under the Department of Transportation to strengthen its role as a civilian maritime authority rather than a purely military unit. "
    },
    
    {
    q: "Which law addresses illegal drugs at sea?",
    choices: [
    "RA 8550",
    "RA 9275",
    "RA 9165",
    "RA 9993"
    ],
    answer: 2,
    explanation: "RA 9165 or the Comprehensive Dangerous Drugs Act of 2002 addresses illegal drugs, including drug trafficking conducted through maritime routes."
    },
    
    {
    q: "Which is NOT a Maritime Safety activity?",
    choices: [
    "Issuance of safety certificates",
    "Port state control",
    "Anti-terrorism patrol",
    "Vessel inspection"
    ],
    answer: 2,
    explanation: "Anti-terrorism patrol falls under Maritime Security operations, not Maritime Safety."
    },
    
    {
    q: "PCG's coordination with NDRRMC is mainly for:",
    choices: [
    "Anti-terror operations",
    "Disaster response",
    "Immigration control",
    "Customs inspection"
    ],
    answer: 1,
    explanation: "The PCG works with the National Disaster Risk Reduction and Management Council (NDRRMC) primarily for disaster response, rescue, and relief operations."
    },
    
    {
    q: "The main PCG role in Port State Control is to ensure:",
    choices: [
    "Revenue collection",
    "Vessel compliance with safety standards",
    "Cargo valuation",
    "Immigration screening"
    ],
    answer: 1,
    explanation: "Port State Control ensures foreign vessels visiting Philippine ports comply with international maritime safety conventions and standards."
    },
    
    {
    q: "Which law governs Disaster Risk Reduction and Management?",
    choices: [
    "RA 9165",
    "RA 9993",
    "RA 10121",
    "RA 8550"
    ],
    answer: 2,
    explanation: "RA 10121 or the Philippine Disaster Risk Reduction and Management Act of 2010 establishes the national disaster management framework."
    },
    
    {
    q: "Which international body oversees SOLAS implementation?",
    choices: [
    "UN",
    "WTO",
    "IMO",
    "ASEAN"
    ],
    answer: 2,
    explanation: "The International Maritime Organization (IMO) is the UN specialized agency responsible for regulating international shipping and implementing conventions such as SOLAS."
    },
    
    {
    q: "Which unit maintains lighthouses and buoys?",
    choices: [
    "Maritime Security",
    "Maritime Safety",
    "Environmental Protection",
    "SAR"
    ],
    answer: 1,
    explanation: "The Maritime Safety Services Command of the PCG maintains aids to navigation such as lighthouses and buoys."
    },
    
    {
    q: "Which agency does PCG commonly coordinate with for border security?",
    choices: [
    "Commission On Audit",
    "Bureau of Immigration",
    "Department of Education",
    "Department of Budget Management"
    ],
    answer: 1,
    explanation: "The PCG coordinates with the Bureau of Immigration for border control, immigration enforcement, and monitoring of foreign vessels."
    },
    
    {
    q: "PCG may board and inspect vessels under its authority to enforce:",
    choices: [
    "Only maritime laws",
    "Only PCG regulations",
    "Maritime and related national laws",
    "Only environmental laws"
    ],
    answer: 2,
    explanation: "Under RA 9993, the Philippine Coast Guard has authority to board and inspect vessels to enforce maritime safety, security, environmental, and other related national laws."
    }
    )


function generalKnowledge(){
    return{
        q:"The Philippine Coast Guard is attached to which department?",
        choices:["Department of National Defense","Department of Transportation","Department of Interior and Local Government","Department of Environment and Natural Resources"],
        answer:2,
        explanation:"The Philippine Coast Guard (PCG) is currently attached to the Department of Transportation (DOTr). The PCG is responsible for maritime safety, maritime security, marine environmental protection, and search and rescue operations in Philippine waters. \n\n Originally, the Philippine Coast Guard was under the Philippine Navy and supervised by the Department of National Defense (DND). However, through the Philippine Coast Guard Law of 2009 (Republic Act No. 9993), the PCG was formally placed under the Department of Transportation to strengthen its role as a civilian maritime authority rather than a purely military unit."
    }

}

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
        answer: 3,
        explanation:"Car is not an animal"
    },

    {
        q:"Eagle is to bird as rose is to________",
        choices:["Red","Beautiful","Gentleman","Flower"],
        answer: 3,
        explanation:"Eagle is a type of bird and rose is a type of flower."
    },

    {
        q:"Which is the odd one out?",
        choices:["Juice","Salt","Coffee","Milk"],
        answer: 1,
        explanation:"All other options are liquid."
    }
}

for(let i=0;i<60;i++){
    let generators=[numberSeries,letterSeries,algebra,ratio,verbal]
    let g=generators[Math.floor(Math.random()*generators.length)]
    questionBank.push(g())
}
